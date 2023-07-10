var content = document.querySelector(".content");
var nav_icon = document.querySelector(".nav-icon");
var nav_bar = document.querySelector(".nav-bar");

nav_icon.addEventListener("click", (e) => {
	for(var i = 0; i < nav_bar.children.length; i++) {
		if(nav_bar.children[i].style.display === "none") {
			nav_bar.children[i].style.display = "block";
			nav_bar.style.width = "10%";
		}else {
			nav_bar.children[i].style.display = "none";
			nav_bar.style.width = 0;
			content.style.width = "100%";
		}
	}
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}