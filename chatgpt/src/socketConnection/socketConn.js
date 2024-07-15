import {io} from 'socket.io-client'
import React from 'react'
let socket;
export const connectWithSocketServer=()=>{
    socket = io("http://localhost:3002")
    socket.on("connect",()=>{
        console.log(`connected with socket.io server `);
        console.log(`${socket.id} `);
    })
}
export const sendConversationMessage=(message,conversationId)=>{
    socket.emit("conversation-message",{
        message,
        conversationId
    })
}
