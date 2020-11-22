// import './LoadEnv'; // Must be the first import
// import app from '@server';
// import logger from '@shared/Logger';

// // Start the server
// const port = Number(process.env.PORT || 3000);
// app.listen(port, () => {
//     logger.info('Express server started on port: ' + port);
// });

const NEW_CONNECTION_EVENT = 'newConnection'
const NEW_LIKE_EVENT = 'newLike'
const NEW_MATCH_EVENT = 'newMatch'

import express from 'express'
import http from 'http'
import * as ioImport from 'socket.io'

let app = express()
let server = new http.Server(app)
let io = new ioImport.Server(server)

app.get('/create', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  const { session } = socket.handshake.query;
  socket.join(session);

  socket.on(NEW_CONNECTION_EVENT, (data: any) => {
    io.in(session).emit(`Welcome to ${session}`)
    // return suggestions for this session
  })

  socket.on(NEW_LIKE_EVENT, (data: any) => {
    // Store what was liked
    // If there is a match:
    io.in(session).emit(NEW_MATCH_EVENT, data);
  })

  socket.on("disconnect", () => {
    socket.leave(session);
  })
})

server.listen(3000, () => {
  console.log('listening on 3000')
})