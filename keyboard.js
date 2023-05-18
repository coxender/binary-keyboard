let counter = 0;
let text = "";

// mapping of which keys fire a 1 and which keys fire a 0
const ONE = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "a",
  "s",
  "d",
  "f",
  "g",
  "z",
  "x",
  "c",
  "v",
  "b",
];
const ZERO = [
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "u",
  "i",
  "o",
  "p",
  "]",
  "]",
  "\\",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "n",
  "m",
  ",",
  ".",
  "/",
];

let timeWindow = 50; // time in ms
let keysPressed = 0;

document.addEventListener("keydown", (event) => {
  keysPressed++;

  // get key
  key = event.key.toLowerCase();

  // get text
  let textbox = document.querySelector("#textbox");
  let input = document.querySelector("#input");

  text = textbox.innerHTML;
  inputText = input.innerHTML;

  if (inputText === "Type Here!" || inputText === "Copied to Clipboard") {
    inputText = "";
  }

  // let backspace rapid fire
  if (key === "backspace" || key === "delete") {
    counter = Math.max(counter - 1, 0);
    inputText = inputText.slice(0, -1);
  }

  // prevent multiple keys from firing at the same time
  event.preventDefault();
  if (event.repeat) return;
  if (keysPressed != 1) return;

  if (keysPressed == 1 && ZERO.includes(key)) {
    inputText += "0";
    counter++;
  } else if (keysPressed == 1 && ONE.includes(key)) {
    inputText += "1";
    counter++;
  }

  if (counter === 8) {
    counter = 0;
    // get last byte
    let int = parseInt(inputText, 2);
    inputText = inputText.slice(0, -8);
    // backspace character
    if (int == 8) {
      // remove previous character
      text = text.slice(0, -1);
      counter = Math.max(counter - 1, 0);
    } else {
      let byte = String.fromCharCode(int);
      inputText = inputText.slice(0, -8);
      console.log(byte);
      text += byte;
    }
  }
  console.log(counter);
  textbox.innerHTML = text;
  input.innerHTML = inputText;
});

document.addEventListener("keyup", (event) => {
  keysPressed--;
});
