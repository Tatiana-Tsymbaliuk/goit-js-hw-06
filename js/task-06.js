const inputWithId = document.querySelector("#validation-input");

const validLength = Number(inputWithId.getAttribute('data-length'));

inputWithId.addEventListener('focus', handeleIputFocus);
inputWithId.addEventListener('blur', handeleIputBlur);
// inputWithId.addEventListener('input', handeleIputChange);

function handeleIputFocus() {
        console.log('инпут получил событие focus');
}

function handeleIputBlur(event){
        if (event.target.value.trim().length === validLength) {
                inputWithId.classList.add("valid");
                
        } else {
                inputWithId.classList.add("invalid");
              
        }
};





// function handeleIputChange(event) {
        //console.log('инпут получил событие input');
                      // };
