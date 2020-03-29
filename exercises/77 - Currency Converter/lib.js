const ratesByBase = {};
const endpoint = 'https://api.exchangeratesapi.io/latest';


async function fetchRates(from = 'USD') {
    const res = await fetch(`${endpoint}?base=${from}`);
    const rates = await res.json();
    return rates;
}

export function generateCurrencyOptions(options){
  return Object.entries(options).map(
    ([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  ).join('');
}

export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}


export async function convert(amount, from, to) {
    if (!ratesByBase[from]) {
        const rates = await fetchRates(from);
        ratesByBase[from] = rates;
    }
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = amount * rate;
    return convertedAmount;
}