let tl = gsap.timeline();

if (!sessionStorage.getItem('animationPlayed')) {
  sessionStorage.setItem('animationPlayed', true);
  tl.fromTo(
    '.hero-video',
    {
      clipPath: 'circle(15%)',
      scale: 0.3,
      rotation: -90,
      borderRadius: '50%',
    },
    {
      clipPath: 'circle(20%)',
      scale: 0.4,
      rotation: 0,
      borderRadius: '0%',
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
        duration: 1.5,
        ease: 'power2.inOut',
      }
    )
    .fromTo(
      '.scroll-down-btn',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      },
      '-=1'
    )
    .fromTo(
      '.playbutton',
      {
        scale: 0,
        rotation: 45,
      },
      {
        duration: 1.5,
        ease: 'Expo.easeInOut',
        scale: '1',
        rotation: 0,
      },
      '-=1'
    )
    .fromTo(
      '.hero-find-us-btn',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      },
      '-=1'
    );
} else {
  tl.fromTo(
    '.hero-video',
    {
      clipPath: 'circle(15%)',
      scale: 0,
      borderRadius: '50%',
    },
    {
      clipPath: 'circle(100%)',
      scale: 1,
      borderRadius: '0%',
      duration: 0,
    }
  )
    .fromTo(
      '.navbar',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0,
      }
    )
    .fromTo(
      '.scroll-down-btn',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0,
      }
    )
    .fromTo(
      '.playbutton',
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0,
      }
    )
    .fromTo(
      '.hero-find-us-btn',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0,
      }
    );
}

// Hide the scroll down button after the user scrolls down for a while
const scrollDownBtn = document.querySelector('.scroll-down-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollDownBtn.style.opacity = '0';
  } else {
    scrollDownBtn.style.opacity = '1';
  }
});
