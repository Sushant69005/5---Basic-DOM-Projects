let display = document.querySelector(".display");

function appendvalue(text) {
  if (
    display.innerText === "0" ||
    display.innerText === "ERROR" ||
    display.innerText === "Infinity"
  ) {
    display.innerText = text;
    return;
  }
  display.innerText = `${display.innerText}${text}`;
}

function cleardisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    if (display.innerText.includes("/0")) {
      display.innerText = "Infinity";
      return;
    }
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "ERROR";
  }
}
