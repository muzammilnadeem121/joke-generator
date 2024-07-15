function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => console.log('Error:', error));
}

document.getElementById('jokeBtn').addEventListener('click', fetchJoke);
