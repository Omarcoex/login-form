const pedir = document.getElementById("pedir");
const lista = document.getElementById("lista");
const modal = document.querySelector(".modal");
const producto_esco = document.querySelector("#producto_escogido");
const cancelar = document.querySelector(".cancel");

pedir.addEventListener("click", () => {
  if (lista.options[lista.selectedIndex].value === "value1") {
    alert("No escogiste nada");
  } else {
    modal.style.top = 0;
    producto_esco.textContent=lista.options[lista.selectedIndex].text;
    
  }

  // console.log("hola")
});
cancelar.addEventListener("click", () => {
  modal.style.top = "-870px";
  lista.selectedIndex = 0;
});
