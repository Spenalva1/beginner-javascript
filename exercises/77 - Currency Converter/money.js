import {handleInput, handleSubmit} from './handlers.js';
import {fromSelect, toSelect, form} from './elements.js';
import currencies from './currencies.js';
import { generateCurrencyOptions } from './lib.js';

const html = generateCurrencyOptions(currencies);
fromSelect.innerHTML = html;
toSelect.innerHTML = html;
form.addEventListener('input', handleInput)
form.addEventListener('submit', handleSubmit)