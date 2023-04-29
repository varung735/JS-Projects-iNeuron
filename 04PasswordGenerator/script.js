const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ['!', '@', '#', '$', '%', '&', '/', '{', '}', '[', ']', '<', '>', '?', '~'];

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    window.navigator.clipboard.writeText(resultEl.innerText);
    alert("Text Copied");
})

generateEl.addEventListener('click', () => {
    generatePassword(lowercaseEl.checked, uppercaseEl.checked, numbersEl.checked, symbolsEl.checked, parseInt(lengthEl.value));
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = '';
    let allowed = [];

    if(lower == true){
        allowed.push('lower');
    }
    if(upper == true){
        allowed.push('upper');
    }
    if(number == true){
        allowed.push('number');
    }
    if(symbol == true){
        allowed.push('symbol');
    }

    console.log(allowed);

    for(let i = 0; i < length; i++){
        if(allowed[Math.floor(Math.random() * allowed.length)] == 'lower'){
            password = password + getRandomLower();
        }
        if(allowed[Math.floor(Math.random() * allowed.length)] == 'upper'){
            password = password + getRandomUpper();
        }
        if(allowed[Math.floor(Math.random() * allowed.length)] == 'number'){
            password = password + getRandomNumber();
        }
        if(allowed[Math.floor(Math.random() * allowed.length)] == 'symbol'){
            password = password + getRandomSymbol();
        }
    }

    resultEl.innerText = password;
}

function getRandomLower() {
    return alphas[Math.floor(Math.random() * 26)];
}

function getRandomUpper() {
    return alphas[Math.floor(Math.random() * 26)].toUpperCase();
}

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * 10)];
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * 15)];
}