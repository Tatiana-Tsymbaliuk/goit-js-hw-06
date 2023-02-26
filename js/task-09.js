const widgetBtn = document.querySelector('.change-color');
const widgetBody = document.querySelector('body');
const widgetColorText = document.querySelector('.color');
console.log(widgetBody);
  
widgetBtn.addEventListener('click', () => {
  widgetBody.style.backgroundColor = getRandomHexColor();
  widgetColorText.textContent = getRandomHexColor();
});


function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
};
