async function getUsers() {
  let root = document.getElementById("root");
  let resp = await fetch("http://localhost:3000/json");
  let data = await resp.json();
  html = data
    .map((d) => {
      return `
        <p>${d.nombre}, ${d.apellido},${d.correo}</p>
    `;
    })
    .join("");
  root.innerHTML = html;
}
getUsers();
