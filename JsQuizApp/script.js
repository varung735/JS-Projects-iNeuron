const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.createElement("p");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answers = [];
let score = 0;

loadQuiz()

function loadQuiz() {
        questionEl.innerText = quizData[currentQuiz].question;
        a_text.innerText = quizData[currentQuiz].a;
        b_text.innerText = quizData[currentQuiz].b;
        c_text.innerText = quizData[currentQuiz].c;
        d_text.innerText = quizData[currentQuiz].d;
        currentQuiz++;
}

function getScore(score) {

    // This loop compares the your choices with actual answers
    for(let i = 0; i < quizData.length; i++){
        if(answers[i] == quizData[i].correct){
            score += 1;
        }
    }

    answerEls.innerText = "Your Score is " + score;
}

function getSelected(currentQuiz) {
    let selected = document.getElementsByName("answer");

    // This loop stores the selected option in answers array.
    for(let i = 0; i < selected.length; i++){
        if(selected[i].checked){
            if(selected[i]){
                answers[currentQuiz] = selected[i].getAttribute('id');
            }
        }
    }
}

submitBtn.addEventListener('click', () => {
    getSelected(currentQuiz);
    if(currentQuiz >= quizData.length){
       getScore(score);
    }
    else{
        loadQuiz();
        console.log(currentQuiz);
        console.log(answers);
    }
    
})