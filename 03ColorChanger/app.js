let canvas = document.getElementById('canvas');
let button = document.getElementById('button');
let hex = '#';
let str = '123456789abcdef';

button.addEventListener('click', () => {
    for(let i = 0; i < 6; i++){
        hex = hex + str[Math.floor(Math.random() * 14)];
    }
    console.log(hex);
    canvas.style.backgroundColor = hex; 
    hex = '#';
})

