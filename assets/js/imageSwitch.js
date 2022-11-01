// Used on the Apparel Extension Page to change the image based on the selected image

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
