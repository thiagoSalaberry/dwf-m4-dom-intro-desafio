const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector("ul.lista");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  for (let index = 0; index < cosasQueAprendimos.length; index++) {
    const nuevoEl = document.createElement("li");
    if (cosasQueAprendimos[index].class != "") {
      nuevoEl.classList.add(cosasQueAprendimos[index].class);
    }
    nuevoEl.textContent = cosasQueAprendimos[index].tema;
    lista.append(nuevoEl);
  }
}

main();
