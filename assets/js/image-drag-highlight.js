// image highlight
let featuredStrains = document.querySelectorAll(".featured-strains__container");
featuredStrains.forEach(function (strain) {
  strain.addEventListener("click", function () {
    featuredStrains.forEach(function (strain) {
      strain.classList.remove("active");
    });

    strain.classList.add("active");
  });
});

// grab and scroll images
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
