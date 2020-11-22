// import './LoadEnv'; // Must be the first import
// import app from '@server';
// import logger from '@shared/Logger';

// // Start the server
// const port = Number(process.env.PORT || 3000);
// app.listen(port, () => {
//     logger.info('Express server started on port: ' + port);
// });

import express from 'express'
import http from 'http'
import * as ioImport from 'socket.io'
import { getSuggestions } from './routes/getSuggestions'
import { SocketEvent } from './types'
import { 
  NEW_CONNECTION_EVENT, 
  NEW_LIKE_EVENT, 
  NEW_MATCH_EVENT, 
} from './constants'

const SERVER_PORT = 4000

let app = express()
let server = new http.Server(app)
let io = new ioImport.Server(server, { cors: { origin: '*' } })

app.use('/get-suggestion', (req, res) => {
  const {lat, lng} = req.query
  const roomId = (Math.random()*10000).toPrecision(4)
  res.send({roomId})
})

io.on("connection", (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  io.in(roomId).emit(NEW_CONNECTION_EVENT, 'Welcome')

  socket.on(NEW_LIKE_EVENT, (data: SocketEvent) => {
    // Store what was liked
    // If there is a match:
    io.in(roomId).emit(NEW_MATCH_EVENT, data);
  })

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`listening on ${SERVER_PORT}`)
})