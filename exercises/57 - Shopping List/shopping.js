const shoppingList = document.querySelector('div.shopping-list');
const listForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function handleSubmit(e) {
    e.preventDefault();
    if (!e.currentTarget.item.value) return;
    items.push({
        id: Date.now(),
        name: e.currentTarget.item.value,
        completed: false,
    });
    e.currentTarget.reset();
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    items.sort((x, y) => (y.completed === x.completed) ? 0 : y.completed ? -1 : 1);
    const html = items.map(item => `
        <li class="shopping-item">
            <input type="checkbox" value="${item.id}" ${item.completed ? 'checked' : ''}>
            <span class="itemName">${item.name}</span>
            <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
        </li>
    `).join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
};

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsCompleted(id) {
    const itemRef = items.find(item => item.id === id);
    itemRef.completed = !itemRef.completed;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function restoreFromLocalStorage() {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if (lsItems) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

listForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', e => {
    id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        deleteItem(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsCompleted(id);
    }
});


restoreFromLocalStorage();