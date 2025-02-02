const {v4 : uuid} =require('uuid')
const {Server}=require("socket.io");
let sessions={}
const registerSocketServer=(server)=>{
    const io=new Server(server,{
        cors:{
            origin:'*',
            methods:["GET","POST"],
        },
    });
    io.on('connection',(socket)=>{
        console.log(`socket is connected ${socket.id}`)
        socket.on('session-history',(data)=>{
            sessionHistoryHandler(socket,data)
        })

        socket.on('conversation-message',(data)=>{
            conversationMessageHandler(socket,data)

        })
    })
}
const sessionHistoryHandler=(socket,data)=>{
    const{sessionId}=data;
    if(sessions[sessionId]){
        //send existing session data back to user
        socket.emit('session-details',{
            sessionId,
            conversations:sessions[sessionId],
        })
    }else{
        const newSessionId=uuid()
        sessions[newSessionId]=[]
        const sessionDetails={
            sessionId:newSessionId,
            conversation:[]
        }
        socket.emit('session-details',sessionDetails)
    }

}
const conversationMessageHandler=(socket,data)=>{
    console.log(data);
}
module.exports={registerSocketServer}
