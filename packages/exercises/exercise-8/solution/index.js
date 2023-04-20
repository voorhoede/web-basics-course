/**
 * use document.querySelector to get the elements with joke-button and joke as id
 */
const jokeButtonElement = document.getElementById("joke-button");
const jokeElement = document.getElementById("joke");

const jokes = [
    "I invented a new word! Plagiarism!",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Did you hear about the guy whose whole left side was cut off? He's all right now.",
    "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!",
    "I used to work in a shoe recycling shop. It was sole destroying.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!",
]

function getRandomJoke() {
    return jokes[Math.floor(Math.random() * jokes.length)];
}

/**
 * When the button is clicked, use the getRandomJoke function to get a random joke
 * Replace the textContent of the joke element with the random joke
 */
jokeButtonElement.addEventListener("click", function () {
    const joke = getRandomJoke();

    jokeElement.textContent = joke
});
