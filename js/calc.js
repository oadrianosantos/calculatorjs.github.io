import { trocarcor } from "./trocarcor.js";
import { copiar } from "./copiar.js";
import { calcular, clear } from "./calcOptions.js";
import { key, digitar } from "./keyOptions.js";

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equal").addEventListener("click", calcular);

document.querySelectorAll(".charKey").forEach(digitar);

document.getElementById("copyToClipboard").addEventListener("click", copiar);

document.getElementById("themeSwitcher").addEventListener("click", trocarcor);

input.addEventListener("keydown", key);
