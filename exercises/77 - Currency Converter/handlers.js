import { convert, formatCurrency } from './lib.js';
import { fromSelect, formInput, toSelect, toAmount } from './elements.js';

export async function handleInput() {
  const unformattedAmount = await convert(
    formInput.value,
    fromSelect.value,
    toSelect.value
  );
  toAmount.textContent = formatCurrency(unformattedAmount, toSelect.value);
}

export async function handleSubmit(e) {
  e.preventDefault();
}
