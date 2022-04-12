let prato;
let bebida;
let sobremessas;

function escolherFrango() {
  document.getElementById("Frango").style.borderColor = "green";
  document.getElementById("Carne").style.borderColor = "white";
  prato = "Frango";
}
function escolherCarne() {
  document.getElementById("Carne").style.borderColor = "green";
  document.getElementById("Frango").style.borderColor = "white";
  prato = "Carne";
}
function escolherCoca() {
  document.getElementById("Coca").style.borderColor = "green";
  document.getElementById("Bebida").style.borderColor = "white";
  bebida = "Coca";
}
function escolherBebida() {
  document.getElementById("Bebida").style.borderColor = "green";
  document.getElementById("Coca").style.borderColor = "white";
  bebida = "Bebida";
}
function escolherPudim() {
  document.getElementById("Pudim").style.borderColor = "green";
  document.getElementById("Sorvete").style.borderColor = "white";
  sobremessas = "Pudim";
}
function escolherSorvete() {
  document.getElementById("Sorvete").style.borderColor = "green";
  document.getElementById("Pudim").style.borderColor = "white";
  sobremessas = "Sorvete";
}
function finalizarPedido() {
  let mensagem;

  mensagem =
    "Ola, gostaria de pedir um combo: " +
    prato +
    ", " +
    bebida +
    ", " +
    sobremessas;

  window.open("https://wa.me/5521963129658?text=" + mensagem);
}
