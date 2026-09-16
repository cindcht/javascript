
// Champs du formulaire

const manga = document.querySelector('#manga');
const genre = document.querySelector('#genre');
const nbventes = document.querySelector('#nbventes');


// Zones où afficher les résultats

const affichermanga = document.querySelector('#affichermanga');
const affichergenre = document.querySelector('#affichergenre');
const affichernbventes = document.querySelector('#affichernbventes');


// Fonction appelée lorsque l'on clique sur "Ajouter"

function afficherCarte(event) {

    event.preventDefault();

    affichermanga.textContent = manga.value;
    affichergenre.textContent = genre.value;
    affichernbventes.textContent = nbventes.value;

}
