
function bigWords(text) {
    return text.toUpperCase();
}

const input = document.querySelector('input');
const button = document.querySelector('button');
const textOutput = document.querySelector("p");

button.addEventListener('click', () => {
    const result = bigWords(input.value);
    textOutput.innerText = result;
    console.log(result);})


