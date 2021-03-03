const app=require('express')();
const http=require('http').createServer(app);
const port = Process.env.PORT || 3000 ;

app.get('/',(req,res)=>{
    res.send('hello from server')
})

const socket=require('socket.io')(http);

socket.on('connection',(userSocket)=>{
    console.log('connected');
    userSocket.on('send_message',(data)=>{
        userSocket.broadcast.emit("receive_message", data)
    })
})


http.listen(port);