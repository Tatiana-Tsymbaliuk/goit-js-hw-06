const inputWithId = document.querySelector("#font-size-control");

const textWithId = document.querySelector("#text");


const handleInputChange =()=> {    
        textWithId.style.fontSize = `${inputWithId.value}px`;    
};
inputWithId.addEventListener('input', handleInputChange);