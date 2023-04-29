let joke = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', () => {
    generateAjoke();  
})

async function generateAjoke() {
    const getJoke = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeData = await getJoke.json();
    joke.innerText = jokeData.joke;
}