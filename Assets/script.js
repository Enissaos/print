
const slides = [
	{
		"images": "Assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"images": "Assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"images": "Assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"images": "Assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



/*Selection des élements du Dom*/

const arrowLeft = document.querySelector(".arrow.arrow_left");
const arrowRight = document.querySelector(".arrow.arrow_right");

const dots = document.querySelectorAll(".dot");


const bannerImg = document.querySelector(".banner-img")
const pBanner = document.querySelector(".p_banner")

/*initialisation de la diapo index 0=celle de depart par la variable currentslideindex*/

let currentSlideIndex = 0;


function showSlide(index) {
	const currentSlide = slides[index];

	bannerImg.src = currentSlide.images
	pBanner.innerHTML = currentSlide.tagLine
	dots.forEach(onedot => onedot.classList.remove("dot_selected"))
	dots[index].classList.add("dot_selected")


}

/*Events listeners*/
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
