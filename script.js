var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex - 1].style.display = "block";  

  setTimeout(showSlides, 5000);
}

var slideIndexTwo = 0;
showSlidesTwo();

function showSlidesTwo() {
  var j;
  var slidesTwo = document.getElementsByClassName("slides");

  for (j = 0; j < slidesTwo.length; j++) {
    slidesTwo[j].style.display = "none";  
  }
  slideIndexTwo++;
  if (slideIndexTwo > slidesTwo.length) {slideIndexTwo = 1}

  slidesTwo[slideIndexTwo - 1].style.display = "block";  

  setTimeout(showSlidesTwo, 7000);
}