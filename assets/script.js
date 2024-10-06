const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Bannière image 
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

//Slide actuelle
let currentSlide = 0;

//Selection de toutes les slides
const Allsides = document.querySelectorAll('.slide');

//Nombre de slides
const numberOfSlide = slides.length;

//Flèches de navigation
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');


// Affichage de la slide actuelle
function showSlide(index) {
	console.log('Image source:', slides[index].image);
	bannerImg.src = slides[index].image;
	bannerText.innerHTML = slides[index].tagLine;

	updateDots();
}


//EventListeners pour la flèche gauche
left.addEventListener('click', function () {
	if (currentSlide === 0) {
		currentSlide = numberOfSlide - 1;
	} else {
		currentSlide--;
	}

	showSlide(currentSlide);

});

//EventListeners pour la flèche droite
right.addEventListener('click', function () {
	if (currentSlide === numberOfSlide - 1) {
		currentSlide = 0;

	} else {
		currentSlide++;
	}

	showSlide(currentSlide);
});

//Dots
const dotsContainer = document.querySelector(".dots");

//Création des dots
function createDots() {
	for (let i = 0; i < numberOfSlide; i++) {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		// Ajouter un écouteur d'événement à chaque dot pour permettre la navigation en cliquant dessus
		dot.addEventListener('click', function () {
			currentSlide = i; // Met à jour l'index de la slide courante
			showSlide(currentSlide); // Affiche la diapositive correspondante
		});

		dotsContainer.appendChild(dot); 
	}
}

//Ajout des dots
function updateDots() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		dot.classList.remove('dot_selected');
		if (index === currentSlide) {
			dot.classList.add('dot_selected');
		}
	});
}

createDots();
showSlide(currentSlide);
