const input = document.getElementById("validation-input");
input.addEventListener("blur", (ev) => {
    const dataLength = parseInt(ev.target.getAttribute("data-length"), 10);
    ev.target.classList.toggle("valid", (dataLength === ev.target.value.length));
    ev.target.classList.toggle("invalid", (dataLength !== ev.target.value.length));
    
});