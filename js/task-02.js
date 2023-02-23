const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsWithId = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
  const ingredientsEL = document.createElement('li');
  ingredientsEL.classList.add('item');
  ingredientsEL.textContent = option;
  return ingredientsEL
});
//console.log(elements);
ingredientsWithId.append(...elements);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const option =(ingredients[i]);
//   const ingredientsEL = document.createElement('li');
// ingredientsEL.classList.add('item');
// ingredientsEL.textContent = option;
//   //console.log(ingredientsEL);
//   elements.push(ingredientsEL);
// }
// console.log(elements);
// ingredientsWithId.append(...elements);