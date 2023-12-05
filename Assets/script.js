
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);



const arrowLeft = document.querySelector(".arrow.arrow_left");
const arrowRight = document.querySelector(".arrow.arrow_right");

const dots = document.querySelectorAll(".dot");

arrowLeft.addEventListener("click", function () {
	console.log("La fleche gauche!");
});

arrowRight.addEventListener("click", function () {
	console.log("La fleche droite!");
});

