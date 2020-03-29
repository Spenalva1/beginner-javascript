const tabButtons = document.querySelectorAll('[role="tab"]');
const tabs = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
    clicked = e.currentTarget;
    tabButtons.forEach(button => button.setAttribute('aria-selected', false));
    tabs.forEach(tab => tab.hidden = true);
    clicked.setAttribute('aria-selected', true);
    tabs.find(e => e.getAttribute('aria-labelledby') === clicked.id).hidden = false;
}

tabButtons.forEach((button) => button.addEventListener('click', handleClick));