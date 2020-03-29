// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');


// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const newDiv = `
    <div>
        <p>First paragrahp</p>
        <p>Second paragrahp</p>
    </div>
`;
const fragment = document.createRange().createContextualFragment(newDiv);

// put this div before the unordered list from above
ul.insertAdjacentElement('beforebegin', fragment.querySelector('div'));

// add a class to the second paragraph called warning
// remove the first paragraph
const p1 = document.querySelector('div p');
p1.nextElementSibling.classList.add('warning');
p1.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    return `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
        </div>
    `;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Have that function make 4 cards
let cards = generatePlayerCard('santi', '20', 179);
cards += generatePlayerCard('cata', '19', 159);
cards += generatePlayerCard('mama', '50', 161);
cards += generatePlayerCard('papa', '68', 168);

// append those cards to the div
cardsDiv.innerHTML = cards;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
document.querySelectorAll('.playerCard').forEach(function (card) {
    card.innerHTML += '<button class="delete-btn">DELETE</button>';
});
// select all the buttons!
const buttons = document.querySelectorAll('.delete-btn');
// make out delete function
function destroy(event) {
    return event.currentTarget.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach((button) => {
    return button.addEventListener('click', destroy)
});