function hideElementByID(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementByID(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');

}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
    element.classList.add('text-3xl');
    element.classList.add('font-extrabold');
}

function removeBgColor(id) {
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-500');
}

function getTextElementById(elementId) {
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText);
    return value;
}
function setTextValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}


function getARandomAlphabet() {
    const alphabetString = 'abcdefjhijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    const randomNumbers = Math.random() * 25;
    const index = Math.round(randomNumbers);

    const alphabet = alphabets[index];
    return alphabet;

}


