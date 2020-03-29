const buttons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const modalH2 = modalInner.querySelector('h2');
const modalImg = modalInner.querySelector('img');

function handleClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    modalH2.textContent = card.dataset.description;
    modalImg.src = card.querySelector('img').src.replace('200', '600');
    modalOuter.classList.add('open');
}

function handleClickOutside(e) {
    if (e.currentTarget === e.target) closeModal();
}

function closeModal(){
    modalImg.src='';
    modalOuter.classList.remove('open');
}


function handleKeyUp(e){
    if(e.key === 'Escape' && modalOuter.classList.contains('open')) closeModal();
}


buttons.forEach(button => button.addEventListener('click', handleClick));
modalOuter.addEventListener('click', handleClickOutside);
window.addEventListener('keydown', handleKeyUp);