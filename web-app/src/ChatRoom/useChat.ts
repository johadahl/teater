import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const NEW_CONNECTION_EVENT = "newConnection"
const SOCKET_SERVER_URL = "http://localhost:4000";

export const useChat = (roomId: string) => {
  const [messages, setMessages] = useState<any[]>([]); // Sent and received messages
  const socketRef = useRef<SocketIOClient.Socket>();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef?.current?.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    socketRef.current.on(NEW_CONNECTION_EVENT, (message: any)=> {
      console.log(message)
    })
    
    return () => {
      socketRef?.current?.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody: any) => {
    socketRef?.current?.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};