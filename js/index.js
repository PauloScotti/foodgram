const inputNome = document.getElementById("nome");

const buttonLogar = document.querySelector("button");
buttonLogar.addEventListener("click", logar);

function logar() {
  localStorage.setItem("nomeVisitante", inputNome.value);
  window.location = "feed.html";
}

/*
const sections = document.querySelectorAll("section");
console.log(sections);
*/
