function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.querySelector("#boxes");
const numberElem = document.querySelector("#controls input");
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");

const removeAll = function(container){
  //container.innerHTML = '';
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  return false;
}

const createBoxes = function(amount){
  const elems = [];
  let w = 30;
  let h = 30;
  if (container.children.length){
    removeAll(container);
  }
  for (let i = 0; i < amount; i++){
    const newElem = document.createElement("div");
    newElem.style.width = w + 'px';
    newElem.style.height = h + 'px';
    newElem.style.backgroundColor = getRandomHexColor();
    elems.push(newElem);
    w += 10;
    h += 10;
  }
  container.append(...elems);
};

btnCreate.addEventListener('click', (evt) => {
  const amount = parseInt(numberElem.value,10);
  if (amount > 0){
    createBoxes(amount);
  }
});

btnDestroy.addEventListener('click', (evt) => {
  removeAll(container);
});
