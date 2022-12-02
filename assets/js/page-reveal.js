let tl = gsap.timeline({});

tl.fromTo(
  ".hero-container",
  {
    clipPath: "circle(7%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 1.5,
    delay: 5,
  }
);
