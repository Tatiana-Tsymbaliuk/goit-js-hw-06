let counterValue = 0; 

const buttonWithId = document.querySelector("#counter");
//console.log(buttonWithId);
const counterValueId = document.querySelector("#value");
//console.log(counterValueId);
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

//console.log(decrementBtn.dataset.action);
//console.log(incrementBtn.dataset.action);


const handleIncrement = () => {
        counterValue += 1;
counterValueId.textContent = counterValue;
};
incrementBtn.addEventListener('click', handleIncrement);


  

const  handleDecrement  = () => {
        counterValue -= 1;
counterValueId.textContent = counterValue;
}
decrementBtn.addEventListener('click', handleDecrement);


