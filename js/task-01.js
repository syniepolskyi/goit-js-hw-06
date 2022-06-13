"use strict";

const subTask01 = function(elems){
    if(!elems){
        return "There are no categories here";
    }
    return `Number of categories: ${elems.length}`;
};
const subTask02 = function(elems){
    let resulArray = [];
    for(const elem of elems){
        const categoryObj = elem.querySelector("h2");
        if (!categoryObj){
            return "There are no category's titles here";
        }
        const categoryName = categoryObj.innerText;
        const subElems = elem.querySelectorAll("li");
        if (!subElems.length){
            return "There are no elements here";
        }
        resulArray.push(`Category: ${categoryName}\n`
          + `Elements: ${subElems.length}`);
    }
    return resulArray.join("\n\n");
};

(function task01(){
    let consoleStr = '';
    const elems = document.querySelectorAll("ul#categories > li.item");
    consoleStr += subTask01(elems);
    consoleStr += "\n\n";
    consoleStr += subTask02(elems);
    console.log(consoleStr);
})();