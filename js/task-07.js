const input = document.getElementById("font-size-control");
const spanText = document.getElementById("text");
input.addEventListener("input", (evt) => {
    spanText.style.fontSize = evt.target.value+'px';
})