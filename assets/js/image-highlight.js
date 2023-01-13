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
