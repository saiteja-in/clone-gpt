const {Server}=require("socket.io");
const registerSocketServer=(server)=>{
    const io=new Server(server,{
        cors:{
            origin:'*',
            methods:["GET","POST"],
        },
    });
    io.on('connection',(socket)=>{
        console.log(`socket is connected ${socket.id}`)

        socket.on('conversation-message',(data)=>{
            conversationMessageHandler(socket,data)

        })
    })
}
const conversationMessageHandler=(socket,data)=>{
    console.log(data);
}
module.exports={registerSocketServer}
