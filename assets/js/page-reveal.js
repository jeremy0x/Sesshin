let tl = gsap.timeline({});

tl.fromTo(
  ".hero-container",
  {
    clipPath: "circle(0%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 1.5,
    delay: 2,
  }
);
