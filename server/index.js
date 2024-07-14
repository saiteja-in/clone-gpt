const express=require('express');
const http=require('http')
const cors=require('cors')
const socketServer=require("./src/socketServer.js")
const app=express();
const server=http.createServer(app)
socketServer.registerSocketServer(server)
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello world")
})
const PORT=process.env.PORT || 3002;
server.listen(PORT,()=>console.log(`server is running on port ${PORT}`))