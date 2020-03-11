const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // server connection msg  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: JSP');
    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 50)
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;
