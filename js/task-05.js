const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("keyup", (ev) => {
    if(ev.target.value === ''){
        output.innerText = 'Anonymous';
        return false;
    } 
    output.innerText = ev.target.value;
})