let userScore = document.getElementById('userScoreVal');
let compScore = document.getElementById('compScoreVal');
let userChoice = document.getElementById('result-user-stat');
let compChoice = document.getElementById('result-comp-stat');
let winner = document.getElementById('result-final-stat');

let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissor = document.getElementById('s');

let user = '';
let comp = '';
const choices = ['Rock', 'Paper', 'Scissors'];

let userSc = 0;
let compSc = 0;

rock.addEventListener('click', () => {
    user = 'Rock';
    comp = choices[Math.floor(Math.random() * 3)];
    userChoice.innerText += ' ' + user;
    compChoice.innerText += ' ' + comp;
    console.log(user);
    console.log(comp);
})

paper.addEventListener('click', () => {
    user = 'Paper';
    comp = choices[Math.floor(Math.random() * 3)];
    userChoice.innerText += ' ' + user;
    compChoice.innerText += ' ' + comp;
    console.log(user);
    console.log(comp);
})

scissor.addEventListener('click', () => {
    user = 'Scissors';
    comp = choices[Math.floor(Math.random() * 3)];
    userChoice.innerText += ' ' + user;
    compChoice.innerText += ' ' + comp;
    console.log(user);
    console.log(comp);
})

if(user == comp){
    userSc += 0;
    compSc += 0;
    winner.innerText += ' none';
}else if(user == 'Paper' && comp == 'Scissors'){
    compSc += 1;
    compScore.innerText += ' ' + compSc;
}




