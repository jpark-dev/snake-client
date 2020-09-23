let connection;

const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "c") {
    connection.write("Say: MOV");
  }
};

const setupInput = conn => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
