const input = document.getElementById("input");

export function key(ev) {
  ev.preventDefault();
  if (keys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
  }
}

export function digitar(charkeyB) {
  charkeyB.addEventListener("click", function () {
    const value = charkeyB.dataset.value;
    input.value += value;
  });
}

const keys = [
  "(",
  ")",
  "/",
  "*",
  "+",
  "-",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];
