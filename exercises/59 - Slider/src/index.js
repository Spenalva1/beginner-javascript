function Slider(slider) {
  let prev;
  let current;
  let next;
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  //functions
  function startSlider() {
    current = slider.querySelector('.current') || slider.querySelector('.slide');
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    applyClasses();
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
    slides.focus();
  }

  function move(direction) {
    current.classList.remove('current');
    prev.classList.remove('prev');
    next.classList.remove('next');
    if (direction === 'prev')[prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    if (direction === 'next')[prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    applyClasses();
  }

  function handleKeyUp(e) {
    (e.key === 'ArrowRight') ? move('next'): '';
    (e.key === 'ArrowLeft') ? move('prev'): '';
  }

  //eventListeners
  nextButton.addEventListener('click', () => move('next'));
  prevButton.addEventListener('click', () => move('prev'));
  slides.addEventListener('keyup', handleKeyUp);

  //start
  startSlider();
}

const slider = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));