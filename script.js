// 'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');
// const nav = document.querySelector('.nav');
// //console.log(nav);
// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);

// const header = document.querySelector('.header');
// // const allSelections = document.querySelectorAll('.section');
// // console.log(allSelections);
// // document.getElementById('section--1');

// // const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// // console.log(document.getElementsByClassName('btn'));


// // creating

// //.insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie"> got it!<button/>';
// header.append(message);
// // header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Deleting

// document.querySelector('.btn--close--cookie').addEventListener('click', function () {
//   message.remove();
// });

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// // console.log(message.style.backgroundColor);
// // console.log(getComputedStyle(message).color);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';


// //document.documentElement.style.setProperty('--color-primary', 'orangered');


// //attributes

// // const logo = document.querySelector('.nav__logo');
// // console.log(logo.alt);
// // console.log(logo.src);
// // console.log(logo.getAttribute('src'));
// // console.log(logo.className);

// // logo.setAttribute('designer', 'Jonas');
// // console.log(logo.getAttribute('designer'));

// // const link = document.querySelector('.nav__link--btn');
// // console.log(link.href);
// // console.log(link.getAttribute('href'));

// // //Data att

// // console.log(logo.datset.versionNumber);

// //Classes
// //logo.classList.add() _ remove _toggle_ contains

// //Button scrolling
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();

//   // method 1
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // method 2
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// // Events and Event Handlers
// // const h1 = document.querySelector('h1');

// // const alertH1 = function (e) {
// //   alert('addEventListener: Great !');
// //   // removing eventListener
// //   // h1.removeEventListener('mouseenter', alertH1);
// // };

// // h1.addEventListener('mouseenter', alertH1);


// // //Method 1 : Event handler
// // // h1.onmouseenter = function (e) {
// // //   alert('addEventListener: Great !');
// // // };

// // // removing eventListener
// // setTimeout(() => h1.removeEventListener('mouseenter', 3000));

// // const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));

// // const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor(0, 255));

// // document.querySelector('.nav__link').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// //   // console.log('LINK', e.target, e.currentTarget);

// //   //stop propagation
// //   // e.stopPropagation();
// // });

// // document.querySelector('.nav__links').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// //   console.log('Container', e.target);

// // });

// // document.querySelector('.nav').addEventListener('click', function (e) {
// //   this.style.backgroundColor = randomColor();
// //   console.log('nav', e.target);

// // });
// //page navigation with event delegation

// // document.querySelectorAll('.nav__link').forEach(function (el) {
// //   el.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     const id = this.getAttribute('href');
// //     console.log(id);
// //     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// //   });
// // });

// // document.querySelectorAll('.nav__link').forEach(function (el) {
// //   el.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     const id = this.getAttribute('href');
// //     console.log(id);
// //     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// //   });
// // });
// //1. add event listener to common parent element
// //2. determine what element originated the event
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   // console.log(e.target);
//   //matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
// // const h1 = document.querySelector('h1');

// // // console.log(h1.querySelectorAll('.highlight'));
// // // console.log(h1.children);
// // // h1.firstElementChild.style.color = 'white';
// // // h1.lastElementChild.style.color = 'orangered';

// // // console.log(h1.parentNode);

// // // h1.closest('.h1').style.background = 'var(--gradient-primary)';

// // console.log(h1.previousElementSibling);
// // console.log(h1.nextElementSibling);

// // Building a Tabbed Component



// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   // Guard clause
//   if (!clicked) return;

//   // Remove active classes
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));

//   // Activate tab
//   clicked.classList.add('operations__tab--active');

//   // Activate content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });
// //Menu fade animation
// const handleHover = function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     // console.log(link, siblings, logo);
//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = this;
//       }

//     });
//     logo.style.opacity = this;
//   }
// }
// // nav.addEventListener('mouseover', function (e) {
// //   handleHover(e, 0.5);
// // });
// // nav.addEventListener('mouseout', function (e) {
// //   handleHover(e, 1);
// // });

// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));

// //Implementing a sticky navigation 
// //Pas conseillé
// // const initialCoords = section1.getBoundingClientRect();
// // window.addEventListener('scroll', function (e) {
// //   //console.log(e);
// //   // console.log(window.scrollY);
// //   if (this.window.scrollY > initialCoords.top) {
// //     nav.classList.add('sticky');
// //   } else {
// //     nav.classList.remove('sticky');
// //   }
// // });

// //Implementing a sticky navigation with the Intersection Observer API
// // const obsOptions = {
// //   root: null,
// //   threshold: [0, 0.2],
// // };
// // const obsCallback = function (entries, observer) {
// //   entries.forEach(entry => {
// //     console.log(entry);
// //   });
// // };
// // const observer = new IntersectionObserver(obsCallback, obsOptions);
// // observer.observe(section1);
// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');

// }
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);

// // revealing elements on scroll

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };
// const allSections = document.querySelectorAll('.section');
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });

// // Implementing lazy loading images 

// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

// Open Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie Message
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
header.append(message);

document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  message.remove();
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation with event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections on scroll
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const allSections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
