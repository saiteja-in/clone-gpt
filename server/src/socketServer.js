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
    })
}
module.exports={registerSocketServer}