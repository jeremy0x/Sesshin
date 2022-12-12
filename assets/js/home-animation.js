let tl = gsap.timeline({
  defaults: {
    ease: 'power2.inOut',
  },
});

tl.fromTo(
  '.preloader',
  {
    opacity: 0,
  },
  {
    duration: 2,
    opacity: 1,
  }
)
  .to('.preloader', {
    delay: 1,
    duration: 1,
    opacity: 0,
    ease: 'power2.inOut',
  })
  .to('.confirm-age', {
    duration: 1.5,
    clipPath: 'circle(100%)',
  })
  .fromTo(
    '.reveal',
    {
      opacity: 0,
    },
    {
      duration: 1,
      opacity: 1,
      stagger: 1,
    }
  );
