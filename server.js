const net = require('net');
const server = net.createServer();
//server.setEncoding('utf8'); // interpret data as text

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});

server.on('data', (data) => {
  console.log('Message from client: ', data);
});

server.listen(3000, () => {
  server.address();
  console.log('Server is listeningn on port 3000 ');
});
