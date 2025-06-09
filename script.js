const carouselItems = document.querySelectorAll(".carousel-item");
let currentSlide = 0;

function showNextSlide() {
  carouselItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 6000);
