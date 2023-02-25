const inputWithId = document.querySelector("#font-size-control");

const textWithId = document.querySelector("#text");

const minNumberInput = Number(inputWithId.getAttribute('min'));
const maxNumberInput = Number(inputWithId.getAttribute('max'));


inputWithId.addEventListener('input', handeleIputChange);
const number = [];
function handeleIputChange(event) {
        for (event = minNumberInput; event <= maxNumberInput; event +1 ){
                textWithId.style.fontSIze += event;
                
        }
        // if (event.target.value.trim().length =< inputWithId.value.max) {
              return;  
        // }
                };