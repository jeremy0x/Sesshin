let tl = gsap.timeline();

tl.fromTo(
  '.hero-video',
  {
    clipPath: 'circle(15%)',
    scale: 0.3,
    rotation: 90,
  },
  {
    clipPath: 'circle(20%)',
    scale: 0.4,
    rotation: 0,
    duration: 2,
    ease: 'power2.inOut',
  }
)
  .fromTo(
    '.hero-video',
    {
      clipPath: 'circle(20%)',
      scale: 0.4,
      borderRadius: '50%',
    },
    {
      clipPath: 'circle(75%)',
      scale: 1,
      borderRadius: '0%',
      duration: 1,
      ease: 'power2.inOut',
      delay: 1.5,
    }
  )
  .fromTo(
    '.navbar',
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    '.scroll-down-btn',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    }
  )
  .fromTo(
    '.playbutton',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    }
  )
  .fromTo(
    '.hero-find-us-btn',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    }
  );
// .fromTo(
//   '.page-overlay',
//   {
//     clipPath: 'circle(0%)',
//   },
//   {
//     clipPath: 'circle(100%)',
//     delay: 1,
//     duration: 1.5,
//     ease: 'power2.inOut',
//     display: 'none',
//   }
// )

// .to('.hero', {
//   background: '#000',
//   delay: -0.5,
// })

// .fromTo(
//   '.hero-container',
//   {
//     clipPath: 'circle(0%)',
//     rotation: 45,
//     opacity: 0,
//   },
//   {
//     clipPath: 'circle(10%)',
//     rotation: 0,
//     opacity: 1,
//     duration: 1,
//   }
// )

// .fromTo(
//   '.hero-container',
//   {
//     clipPath: 'circle(10%)',
//   },
//   {
//     clipPath: 'circle(100%)',
//     duration: 1.5,
//     delay: 1,
//     ease: 'power2.inOut',
//   }
// )

// .fromTo(
//   '.hero-video',
//   {
//     scale: 1,
//   },
//   {
//     scale: 1.5,
//     duration: 1.5,
//     delay: -1.5,
//     ease: 'power2.inOut',
//   }
// )
// .fromTo(
//   '.hero-video',
//   {
//     scale: 1.5,
//   },
//   {
//     scale: 1,
//     duration: 3,
//     ease: 'power2.inOut',
//     delay: 2,
//   }
// )

// Hide the scroll down button after the user scrolls down for a while
const scrollDownBtn = document.querySelector('.scroll-down-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollDownBtn.style.opacity = '0';
  } else {
    scrollDownBtn.style.opacity = '1';
  }
});
