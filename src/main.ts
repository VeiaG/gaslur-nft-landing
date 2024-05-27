import './style.scss';

//shadowing avatars
const avatars = document.querySelectorAll<HTMLImageElement>('.avatar img');
avatars.forEach((avatar) => {
  const shadow = document.createElement('img');
  shadow.src = avatar.src;
  shadow.classList.add('avatar__shadow');
  if(avatar.parentElement) avatar.parentElement.appendChild(shadow);
});

//gsap animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

const elementsToAnimate = document.querySelectorAll('[data-animate]');


elementsToAnimate?.forEach((element) => {
    gsap.from(element, {
      opacity: 0, 
      y: 20, 
      scrollTrigger: {
        trigger: element, 
        start: "top 90%", 
        end: "bottom 80%", 
        once: true, 
      },
    });
  });

//test card hover effect
const card = document.querySelector<HTMLDivElement>('.hero__card');
//media query
const mediaQuery = window.matchMedia('(max-width: 1024px)');
if(!mediaQuery.matches) {
  document.body?.addEventListener('mousemove', (e) => {
    if(!card || !e.currentTarget) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const { clientX, clientY } = e;
    
    const xRatio = (clientX ) / width;
    const yRatio = (clientY ) / height;
    
    const xRotate = 40 * xRatio - 20;
    const yRotate = -40 * yRatio + 20;
    
    const transform = `rotateY(${xRotate}deg) rotateX(${yRotate}deg) `;
    
    const filter = `brightness(${Math.round((1 - yRatio) * 20 + 90)}%)`;
  
    card.style.transform = transform;
    card.style.filter = filter;
  
  });
  
}

