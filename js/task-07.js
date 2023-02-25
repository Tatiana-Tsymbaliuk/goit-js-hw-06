const inputWithId = document.querySelector("#font-size-control");

const textWithId = document.querySelector("#text");



inputWithId.addEventListener('input', handleInputChange);


function handleInputChange() {
       
        textWithId.style.fontSIze = `${inputWithId.value}px`;
    
     
};
