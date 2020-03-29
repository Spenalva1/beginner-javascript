const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const span = form.querySelector('span');
const recipesGrid = document.querySelector('.recipes');
const spinnable = document.querySelector('.spinnable');



function handleSubmit(e) {
  e.preventDefault();
  if (!form.query.value) return;
  fetchAndDisplayRecipes(form.query.value.toLowerCase());
}

async function fetchAndDisplayRecipes(query){
  form.submit.disabled = true;
  span.style.display = 'none';
  spinnable.classList.add('spinner')
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  spinnable.classList.remove('spinner')
  span.style.display = 'block';
  await displayRecipes(recipes.results);
}

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`)
  const data = await res.json();
  return data;
};

async function displayRecipes(recipes) {
  const html = recipes.map((recipe) => 
    `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}}"/><br>`}
      <a href="${recipe.href}">View Recipe →</a>
    </div>`
  ).join('');
  recipesGrid.innerHTML = html;
}




form.addEventListener('submit', handleSubmit);