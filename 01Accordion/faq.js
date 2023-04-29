const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let btnStatus = 1;
const accordianBody = document.querySelector('div');
createFaq();

const faqs = [];

function showFaq(p) {
  // toggles hidden class
 p.classList.toggle("hidden");
}

function createFaq() {
  for(let i = 0; i < faqData.length; i++){
    const div = document.createElement('div');
    const queDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const p = document.createElement('p');

    h3.classList.add("faq");
    button.classList.add("show_btn");
    
    p.classList.add("hidden");

    div.classList.add("faq");
    queDiv.classList.add("faq_header");

    queDiv.appendChild(h3);
    queDiv.appendChild(button);
    
    div.appendChild(queDiv);
    div.appendChild(p);
    
    h3.innerText = faqData[i].question;
    p.innerText = faqData[i].answer;

    accordianBody.append(div);
    console.log(accordianBody.innerText);

    button.addEventListener('click', () => {
      showFaq(p);
    });
  }
}

function btnStatusUpdate() {
  
}


