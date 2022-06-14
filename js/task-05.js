const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("keyup", (ev) => {
    output.innerText = ev.target.value;
    if(ev.target.value === ''){
        output.innerText = 'Anonymous';
    }
})