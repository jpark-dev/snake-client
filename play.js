const net = require('net');
const stdin = process.stdin;

stdin.setEncoding('utf8');
stdin.resume();

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

// stdin.on('data', data => {
//   if(data === '\\q\n') {
//     // close client
//     // client.end();
//     process.exit();
//   }
//   console.log(data);
//   //conn.write(data);
// })



console.log('Connecting ...');
connect();