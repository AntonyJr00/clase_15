const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const port2 = 2000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hola");
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("V=(C+H)xA");
});

server2.listen(port2, hostname, () => {
  console.log(`El servidor se llama http://${hostname}:${port2}`);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se llama http://${hostname}:${port}`);
});
