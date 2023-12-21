
const slides = [
	{
		"images": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"images": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"images": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"images": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);



const arrowLeft = document.querySelector(".arrow.arrow_left");
const arrowRight = document.querySelector(".arrow.arrow_right");

const dots = document.querySelectorAll(".dot");


const bannerImg = document.querySelector(".banner-img")
const pBanner = document.querySelector(".p_banner")


let currentSlideIndex = 0;
function showSlide(index) {
	const currentSlide = slides[index];
	console.log("Afficher la diapositive :", currentSlide.image);
	console.log("Balise associée :", currentSlide.tagLine);
	bannerImg.src = currentSlide.images
	pBanner.innerHTML = currentSlide.tagLine
	dots.forEach(onedot => onedot.classList.remove("dot_selected"))
	dots[index].classList.add("dot_selected")


}
arrowLeft.addEventListener("click", function () {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	showSlide(currentSlideIndex);
});


arrowRight.addEventListener("click", function () {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	showSlide(currentSlideIndex);
});


dots.forEach((dot, index) => {
	dot.addEventListener("click", function () {
		currentSlideIndex = index;
		showSlide(currentSlideIndex);
	});

});
