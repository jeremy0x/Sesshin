// Used on the Apparel Extension Page

// image zoom on hover functionality
const container = document.querySelector(".selected-image-preview");
const img = document.querySelector(".selected-image-preview img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(1.5)";
});

container.addEventListener("mouseleave", () => {
  img.style.transformOrigin = "center";
  img.style.transform = "scale(1)";
})

// toggle the image based on the selected image
let imageList = document.querySelector(".image-list");
let selectedImage = document.querySelector(".selected-image-preview img");

imageList.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    selectedImage.src = e.target.src;
  }
});

// toggle border on selected image
let imgContainer = document.querySelectorAll(".img-container");

imgContainer.forEach(function (container) {
  container.addEventListener("click", function () {
    imgContainer.forEach(function (container) {
      container.classList.remove("active");
    });
    container.classList.add("active");
  });
});
