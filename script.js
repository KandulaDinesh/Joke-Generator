const fetchButton = document.getElementById('fetchButton');
const resultDiv = document.getElementById('result');

fetchButton.addEventListener('click', fetchJoke);

function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      displayJoke(data);
    })
    .catch(error => {
      console.error(error);
      displayError();
    });
}

function displayJoke(data) {
  const setup = data.setup;
  const punchline = data.punchline;

  const html = `
    <h2>Joke:</h2>
    <p>${setup}</p>
    <p>${punchline}</p>
  `;

  resultDiv.innerHTML = html;
}

function displayError() {
  resultDiv.innerHTML = '<p>An error occurred while fetching the joke.</p>';
}
