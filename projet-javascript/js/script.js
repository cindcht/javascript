// Tableau des mangas
const tableau = [
    [0, "Naruto", "shonen", "images/naruto.jpg"],
    [1, "One Piece", "shonen", "images/onepiece.jpg"],
    [2, "ReZero", "Isekai", "images/rezero.webp"]
];

// Champs du formulaire
const manga = document.querySelector('#manga');
const genre = document.querySelector('#genre');

// Zones où afficher les résultats
const affichermanga = document.querySelector('#affichermanga');
const affichergenre = document.querySelector('#affichergenre');
const afficherimage = document.querySelector('#afficherimage');
const afficher = document.querySelector('#afficher');
const messageRecherche = document.querySelector('#message');

// Fonction appelée lorsque l'on clique sur "Rechercher"
function afficherCarte(event) {
    event.preventDefault();

    afficher.style.display = "none";

    let find = false;

    for (const book of tableau) {

        if (
            book[1].toLowerCase() === manga.value.toLowerCase() ||
            book[2].toLowerCase() === genre.value.toLowerCase()
        ) {
            afficher.style.display = "block";
            message.textContent = "Nous avons un résultat concernant votre recherche 😊";

            affichermanga.textContent = book[1];
            affichergenre.textContent = book[2];
            afficherimage.src = book[3];

            find = true;
        }
    }

    if (find === false) {
        alert("Manga introuvable 🤐");
    }
}
