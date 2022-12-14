const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req = "", res) => {
  res.send("Hola mi nombre es antony");
});

app.get("/json", (req = "", res) => {
  let users = [
    { nombre: "Javier", apellido: "Pacheco", correo: "javier@mail.com" },
    { nombre: "Andres", apellido: "Polanco", correo: "andres@mail.com" },
    { nombre: "Julian", apellido: "Mattos", correo: "julian@mail.com" },
    { nombre: "Andrea", apellido: "Sarmiento", correo: "andrea@mail.com" },
    { nombre: "Jazmin", apellido: "Gonzales", correo: "jazmin@mail.com" },
  ];

  res.send(users);
});

app.get("/math", (req = "", res) => {
  res.send(" 10 - 6 = 4");
});

app.listen(port, () => [
  console.log(`Elserver se esta iniciando en http://localhost:${port}`),
]);
