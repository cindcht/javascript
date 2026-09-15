// champs formulaire
const form = document.querySelector('form');
const manga = document.querySelector('#manga');
const genre = document.querySelector('#genre');
const nbventes = document.querySelector('#nbventes');
const photo = document.querySelector('#photo');


//zones où afficher

const affichermanga = document.querySelector('#affichermanga');
const affichergenre = document.querySelector('#affichergenre');
const affichernbventes = document.querySelector('#affichernbventes');
const afficherphoto = document.querySelector('#afficherphoto');

//valeurs par défauts

afficherManga = "titre";
affichergenre = "shonen";
afffichenbventes = 0;



//afficher

function afficherCarte(event) {
    event.preventDefault();
    affichermanga.texteContent = manga.value;
    affichergenre.textContent = genre.value;
    affichernbventes.textContent = nbventes.value;
    afficherphoto.textContent = photo.value;
}

