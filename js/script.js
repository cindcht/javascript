// Tableau des mangas
const tableau = [
    { id: 0, titre: "Naruto", genre: "shonen", image: "images/naruto.jpg" },
    { id: 1, titre: "One Piece", genre: "shonen", image: "images/onepiece.jpg" },
    { id: 2, titre: "ReZero", genre: "Isekai", image: "images/rezero.webp" },
];

// Champs du formulaire
const manga = document.querySelector('#manga');
const genre = document.querySelector('#genre');

// Zones où afficher les résultats
const affichermanga = document.querySelector('#affichermanga');
const affichergenre = document.querySelector('#affichergenre');
const afficherimage = document.querySelector('#afficherimage');
const afficher = document.querySelector('#afficher');

// Fonction appelée lorsque l'on clique sur "Rechercher"
function afficherCarte(event) {
    event.preventDefault();

    afficher.style.display = "none";

    let find = false;

    for (const book of tableau) {

        if (
            book.titre.toLowerCase() === manga.value.toLowerCase() ||
            book.genre.toLowerCase() === genre.value.toLowerCase()
        ) {
            afficher.style.display = "block";

            affichermanga.textContent = book.titre;
            affichergenre.textContent = book.genre;
            afficherimage.src = book.image;

            find = true;
        }
    }

    if (find === false) {
        alert("Manga introuvable");
    }
}
