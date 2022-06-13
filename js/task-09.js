function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const colorElem = document.querySelector(".color");
const body = document.querySelector("body");
btn.addEventListener("click", (evt) => {
  const color = getRandomHexColor();
  colorElem.innerText = color;
  body.style.backgroundColor = color;
});
