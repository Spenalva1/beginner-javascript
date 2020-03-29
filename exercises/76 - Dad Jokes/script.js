import * as handlers  from './handlers.js';
import {jokeButton} from './elements.js'

jokeButton.addEventListener('click', handlers.handleJokeButton);