"use strict";

let consoleStr = '';
const mainElem = document.getElementById("categories");
consoleStr += `Number of categories: ${mainElem.children.length}`;
for(const elem of mainElem.children){
    consoleStr += "\n\n";
    consoleStr += `Category: ${elem.children[0].innerText}\n`
    + `Elements: ${elem.children[1].children.length}`;
}
console.log(consoleStr);
