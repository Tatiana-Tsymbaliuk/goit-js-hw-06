const inputWithId = document.querySelector("#name-input");
console.log(inputWithId);
const outputWithId = document.querySelector("#name-output");

const handeleTextInput = (event) => {
        if (event.target.value === "") {
                outputWithId.textContent = `Anonymous`;
        } else {
                outputWithId.textContent = event.currentTarget.value;
        }
};

inputWithId.addEventListener("input", handeleTextInput);