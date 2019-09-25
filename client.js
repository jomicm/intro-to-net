const net = require('net');

const conn = net.createConnection({
  host: '172.46.3.245',
  port: 3000,
});
conn.setEncoding('utf8');

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});