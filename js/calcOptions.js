const resultado = document.getElementById("result");
const input = document.getElementById("input");

export function calcular() {
  resultado.value = "ERRO";
  const result = eval(input.value);
  resultado.value = result;
}

export function clear() {
  input.value = "";
  input.focus();
}
