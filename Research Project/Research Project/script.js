document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
/*let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.news-item').length;

document.querySelector('#nextBtn').addEventListener('click', () => {
    slideIndexslideIndex = (slideIndexslideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndexslideIndex * 100}%)`;
});

document.querySelector('#prevBtn').addEventListener('click', () => {
    slideIndexslideIndex = (slideIndexslideIndex - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndexslideIndex * 100}%)`;
});
(function() {
    let slideIndex = 0;
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.news-item').length;

    document.querySelector('#nextBtn').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    document.querySelector('#prevBtn').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
})();*/
let newsSlideIndex = 0;
showNewsSlides(newsSlideIndex);

function plusSlides(n) {
  showNewsSlides(newsSlideIndex += n);
}

function showNewsSlides(n) {
  let i;
  let slides = document.getElementsByClassName("news-slide");
  if (n >= slides.length) { newsSlideIndex = 0; }
  if (n < 0) { newsSlideIndex = slides.length - 1; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[newsSlideIndex].style.display = "block";
}

