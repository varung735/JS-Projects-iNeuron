// The current program works for two words now. will fix it later.

let camelCase = document.getElementById("camel-case");
let pascalCase = document.getElementById("pascal-case");
let snakeCase = document.getElementById("snake-case");
let scSnakeCase = document.getElementById("screaming-snake-case");
let kebabCase = document.getElementById("kebab-case");
let scKebabCase = document.getElementById("screaming-kebab-case");
let button = document.getElementById("convert-btn");
let input = document.getElementById("text");

button.addEventListener("click", () => {
    let text = input.value;
    // let spaceIndex = text.indexOf(" ");
    let words = text.split(" ");
    
    // for(let i = 0; i < words.lenght; i++){

    // }

    // To camel case
    camelCase.innerHTML = words[0] + words[1].charAt(0).toUpperCase() + words[1].slice(1);

    // To pascal case
    pascalCase.innerHTML = words[0].charAt(0).toUpperCase() + words[0].slice(1) + words[1].charAt(0).toUpperCase() + words[1].slice(1);

    // To snake case
    snakeCase.innerHTML = words[0] + "_" + words[1];

    // To screaming snake case
    scSnakeCase.innerHTML = words[0].toUpperCase() + "_" + words[1].toUpperCase();

    // To kebab case
    kebabCase.innerHTML = words[0] + "-" + words[1];
    
    // To screaming kebab case
    scKebabCase.innerHTML = words[0].toUpperCase() + "-" + words[1].toUpperCase();
});