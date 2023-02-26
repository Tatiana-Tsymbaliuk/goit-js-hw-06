
const categoriesWithId = document.querySelector("#categories");
const categoriesEL = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesEL.length);
const firstEl = categoriesWithId.firstElementChild; 

categoriesEL.forEach(function (firstEl) {
console.log(`Category: ${firstEl.firstElementChild.textContent}
Elements: ${firstEl.lastElementChild.children.length}`);
});














   
 //const firstEl = categoriesWithId.firstElementChild;    
// console.log("Category:", firstEl.firstElementChild.textContent);
 //const firstElTotal = firstEl.lastElementChild;
// console.log("Elements:", firstElTotal.children.length);

// const secondEl = categoriesWithId.children[1]; 
// console.log("Category:", secondEl.firstElementChild.textContent);
// const secondElTotal = secondEl.lastElementChild;
// console.log("Elements:", secondElTotal.children.length);

// const lastEl = categoriesWithId.lastElementChild;  
// console.log("Category:", lastEl.firstElementChild.textContent);
// const lastElTotal = lastEl.lastElementChild;
// console.log("Elements:", lastElTotal.children.length);
                  