import {fetchJoke}  from './lib.js';
import {randomItemFromArray} from './util.js';
import buttonText from './jokes.js';
import {jokeP, buttonSpan} from './elements.js';

export async function handleJokeButton(e){
    const joke = await fetchJoke();
    jokeP.textContent = joke;
    
    buttonSpan.textContent = randomItemFromArray(buttonText, buttonSpan.textContent);
}