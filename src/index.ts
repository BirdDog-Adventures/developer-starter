import '@splidejs/splide/dist/css/splide-core.min.css';

import Splide from '@splidejs/splide';
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', function () {
  //FAQ accordion
  const contents = document.querySelectorAll('.faq_body');
  const buttons = document.querySelectorAll('.faq_trigger');
  const arrows = document.querySelectorAll('.faq_icon svg');
  const faqCounters = document.querySelectorAll('.faq_counter');

  faqCounters.forEach((counter, index) => {
    const number = index + 1;
    counter.textContent = number.toString().padStart(2, '0');
  });

  const handleClick = (clickedIndex: number) => {
    const content = contents[clickedIndex];
    const arrow = arrows[clickedIndex];
    const isOpen = content.getAttribute('data-open') === 'true';

    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(content, { height: 0, duration: 0.5 }).to(arrow, { rotateZ: 0, duration: 0.5 }, '<0');
      content.setAttribute('data-open', 'false');
    } else {
      tl.to(content, { height: 'auto', duration: 0.5 }).to(
        arrow,
        { rotateZ: -180, duration: 0.5 },
        '<0'
      );
      content.setAttribute('data-open', 'true');
    }
  };

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => handleClick(index));
  });

  //Quotes slider
  const quoteSlider = new Splide('#quote-slider', {
    type: 'loop',
    autoWidth: true,
    speed: 600,
    arrows: true,
    pagination: true,
    flickPower: 500,
    updateOnMove: true,
  });
  quoteSlider.mount();
});
