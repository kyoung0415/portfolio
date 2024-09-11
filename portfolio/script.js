function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function plusSlides(n, carouselId) {
  let carousel = document.getElementById(carouselId);
  let slidePosition = parseInt(carousel.getAttribute("data-slide-position")) || 1;
  slidePosition += n;
  showSlides(slidePosition, carouselId);
}

function currentSlide(n, carouselId) {
  showSlides(n, carouselId);
}

function showSlides(n, carouselId) {
  var i;
  var carousel = document.getElementById(carouselId);
  var slides = carousel.getElementsByClassName("Containers");
  var dots = carousel.getElementsByClassName("dots");
  var slidePosition = n;

  // Set the slide position correctly based on the number of slides
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }

  // Update the stored position in the carousel's dataset
  carousel.setAttribute("data-slide-position", slidePosition);

  // Hide all slides and deactivate all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" enable", "");
  }

  // Display the current slide and activate the corresponding dot
  slides[slidePosition - 1].style.display = "block";
  dots[slidePosition - 1].className += " enable";
}

// Initialize all carousels to show the first slide when the page loads
window.onload = function() {
  showSlides(1, 'carousel_1');
  showSlides(1, 'carousel_2');
  showSlides(1, 'carousel_3');
  showSlides(1, 'carousel_4');
  showSlides(1, 'carousel_5');
  showSlides(1, 'carousel_6');
}