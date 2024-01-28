let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let currentSlide = slides[slideIndex];

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex += n;

  // Reset slideIndex if it goes beyond the last slide
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Reset slideIndex if it goes before the first slide
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  let nextSlide = slides[slideIndex];

  // Display the current slide
  nextSlide.style.display = "block";

  // Change the body background based on the current and next slide's images
  document.body.style.backgroundImage = `url('${currentSlide.getElementsByTagName('img')[0].src}')`;
}

function plusSlides(n) {
  showSlides(n);
}
