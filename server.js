const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req = "", res) => {
  res.send("Hola mi nombre es antony");
});

app.get("/math", (req = "", res) => {
  res.send(" 10 - 6 = 4");
});

app.listen(port, () => [
  console.log(`Elserver se esta iniciando en http://localhost:${port}`),
]);
