const modal = document.querySelector('.modal');
const prevButton = modal.querySelector('.prev');
const nextButton = modal.querySelector('.next');
let currentImage;

function Gallery(gallery) {
  const imgs = Array.from(gallery.querySelectorAll('img'));
  
  function handleClickOutsideModal(e){
    if (e.target === e.currentTarget) closeModal();
  }

  function handleKeyUp(e){
    if(e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function handleImgKeyUp(e){
    if(e.key === 'Enter') showImage(e.target);
  }

  function showNextImage(){
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage(){
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function openModal() {
    if (modal.matches('.open')) return;
    modal.classList.add('open');

    modal.addEventListener('click', handleClickOutsideModal);
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    if (!modal.matches('.open')) return;
    modal.classList.remove('open');
    
    modal.removeEventListener('click', handleKeyUp);
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function showImage(el) {
    if (!el) return;
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  imgs.forEach(img => {
    img.addEventListener('click', e => showImage(e.currentTarget));
    img.addEventListener('keyup', handleImgKeyUp)
  })
}





// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));