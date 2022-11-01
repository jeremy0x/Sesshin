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
