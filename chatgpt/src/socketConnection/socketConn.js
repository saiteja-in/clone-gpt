import {io} from 'socket.io-client'
import React from 'react'
import {setConversations} from "../components/Dashboard/DashboardSlice.js"
import {store} from "../store.js"
let socket;
export const connectWithSocketServer=()=>{
    socket = io("http://localhost:3002")
    socket.on("connect",()=>{
        console.log(`connected with socket.io server `);
        console.log(`${socket.id} `);
        //getSession history
        socket.emit('session-history',{
            sessionId:localStorage.getItem('sessionId')
        })
        socket.on('session-details',(data)=>{
            const {sessionId,conversations}=data;
            localStorage.setItem('sessionId',sessionId)
            store.dispatch(setConversations(conversations))
        })
    })
}
export const sendConversationMessage=(message,conversationId)=>{
    socket.emit("conversation-message",{
        message,
        conversationId
    })
}
