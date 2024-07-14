import {io} from 'socket.io-client'
import React from 'react'
let socket;
export const connectWithSocketServer=()=>{
    socket = io("http://localhost:3002")
    socket.on("connect",()=>{
        console.log(`connected with socket.io server ${socket.id}`);
    })
}
