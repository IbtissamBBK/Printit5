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

//Séléction éléments HTML bannière image + texte
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

//Initialisation de slide actuelle
let currentSlide = 0;

//Selection de toutes les slides
const Allsides = document.querySelectorAll('.slide');

//Nombre de slides
const numberOfSlide = slides.length;


//Selection des flèches de navigation gauche et droite
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');


// Affichage de la slide actuelle
function showSlide(index) {
	bannerImg.src = slides[index].image; //Modifie la source de l'image de la bannière
	bannerText.innerHTML = slides[index].tagLine; //MAJ le texte de la bannière

	updateDots(); //Mise à jour des dots en fonction des slides
}


//EventListeners pour la flèche gauche
left.addEventListener('click', function () {
	if (currentSlide === 0) { 
		currentSlide = numberOfSlide - 1; //Si première slide, passer à la dernière
	} else {
		currentSlide--; //sinon, revenir à la slide précédente
	}

	showSlide(currentSlide); //Affichage nouvelle slide

});

//EventListeners pour la flèche droite
right.addEventListener('click', function () {
	if (currentSlide === numberOfSlide - 1) {
		currentSlide = 0; // Si dernière slide, passer à la première

	} else {
		currentSlide++; //sinon, passer à slide suivante
	}

	showSlide(currentSlide); // Affichage nouvelle slide
});

//Séléction des éléments du conteneur pour les dots
const dotsContainer = document.querySelector(".dots");

//Création des dots
function createDots() {
	for (let i = 0; i < numberOfSlide; i++) {
		const dot = document.createElement('span'); // Création élément 'span' pour chaque slide
		dot.classList.add('dot'); //Ajout la class 'dot'
		
		dot.addEventListener('click', function () { // Ajout EventListeners pour les dots
			currentSlide = i; // Quand on clique sur un dot, on arrive sur la slide correspondante
			showSlide(currentSlide); //Affichage de la slide sélectionné avec le dot
		});

		dotsContainer.appendChild(dot); //Ajout dot à l'intérieur du conteneur
	}
}

//MAJ séléction des dots
function updateDots() {
	const dots = document.querySelectorAll(".dot"); //Séléction tout les dots
	dots.forEach((dot, index) => {
		dot.classList.remove('dot_selected'); // Delete classe "dot_selected" de tous les "dots"
		if (index === currentSlide) {
			dot.classList.add('dot_selected'); // Add classe "dot_selected" au "dot" correspondant à la slide actuelle
		
		}
	});
}

//(Appel des fonctions)

//Création dots lors du chargement de la page
createDots();

//Affichage première slide lors du chargement de la page
showSlide(currentSlide);

