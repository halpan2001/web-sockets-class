let WebSocket = require('ws');

//ws:// (make a  )
//like https://

let wss = new WebSocket.Server({port: process.env.PORT || 8080});

wss.on('connection', (ws)=>{
   ws.on('message', (message)=>{
     console.log(`Recieved: ${message}`);
     // ws.send(message;

     wss.clients.forEach((client) => {
       client.send(message);
     });

   });

   // setTimeout(() =>{
   //   ws.send('hello');
   // }, 2000);
});
