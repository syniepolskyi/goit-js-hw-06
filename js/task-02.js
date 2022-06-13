const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elems = ingredients.map( (ingredient) => {
  const elem = document.createElement("li");
  elem.innerText = ingredient;
  elem.classList.add("item");
  return elem;
});

const list = document.getElementById("ingredients");
list.append(...elems);


