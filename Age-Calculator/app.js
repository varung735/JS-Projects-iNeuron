// const container;
// const error;

let dobInput = document.getElementById("dob");
let yearsSpan = document.getElementById("years");
let monthsSpan = document.getElementById("months");
let daySpan = document.getElementById("days");
let ageDesc = document.querySelector(".desc");
let ageP = document.querySelector(".age");
let errorP = document.querySelector(".error");

let presentDate = new Date();

dobInput.addEventListener('change', () => {
    let birthDate = new Date(dobInput.value);
    // console.log(birthDate.getFullYear());
    // console.log(ageP);
    // console.log(errorP);
    getAge(birthDate)
})


function getAge(birthDate){
    if(presentDate.getFullYear() < birthDate.getFullYear()){
        ageP.style.display = "none";
        ageDesc.style.display = "none";
        errorP.style.display = "block";
    }
    else{
        ageDesc.innerText = " ";
        ageP.style.display = "block";
        ageDesc.style.display = "block";
        errorP.style.display = "none";
        calcAge(birthDate);
    }
}

function calcAge(birthDate){
    ageDesc.innerText = "Your Age is : ";
    ageDesc.innerText += presentDate.getFullYear() - birthDate.getFullYear() + " Years";
    yearsSpan.innerText = presentDate.getFullYear() - birthDate.getFullYear();
    monthsSpan.innerText = Math.abs(presentDate.getMonth() - birthDate.getMonth());
    daySpan.innerText = Math.abs(presentDate.getDate() - birthDate.getDate());
}

// function displayAge(){
    
    
// }

