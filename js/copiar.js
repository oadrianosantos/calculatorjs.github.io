const resultado = document.getElementById("result");

export function copiar(ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copiar") {
    button.innerText = "Copiado";
    button.classList.add("success");
    navigator.clipboard.writeText(resultado.value);
  } else {
    button.innerText = "Copiar";
    button.classList.remove("success");
  }
}
