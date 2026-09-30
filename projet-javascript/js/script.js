// Tableau des mangas

const tableau = [
    ["Naruto", "shonen"],
    ["One Piece", "shonen"],
    ["ReZero", "Isekai"],
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
const out = document.querySelector("#afficher");


// Fonction appelée lorsque l'on clique sur "Rechercher"

const afficherCarte = (event) => {
    event.preventDefault();

    afficher.style.display = "none";

    let find = false;

    for (const book of tableau) {

        if (
            book[1].toLowerCase() === manga.value.toLowerCase() ||
            book[2].toLowerCase() === genre.value.toLowerCase()
        ) {
            afficher.style.display = "block";
            out.innerHTML = `<p id="message">Nous avons un résultat concernant votre recherche 😊</p>
                             <p id="affichermanga">${book[1]}</p>
                             <p id="affichergenre">${book[2]}</p>`
            find = true;
        }

    }

    if (find === false) {
        alert("Manga introuvable 🤐");
    }
}






