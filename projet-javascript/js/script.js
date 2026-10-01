// Tableau des mangas

const tableau = [
    { id: 0, titre: "Naruto", genre: "shonen" },
    { id: 1, titre: "One Piece", genre: "shonen" },
    { id: 2, titre: "ReZero", genre: "Isekai" }
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
            book.titre.toLowerCase() === manga.value.toLowerCase() ||
            book.genre.toLowerCase() === genre.value.toLowerCase()
        ) {
            afficher.style.display = "block";
            out.innerHTML = `<p id="message">Nous avons un résultat concernant votre recherche 😊</p>
                             <p id="affichermanga">${book.titre}</p>
                             <p id="affichergenre">${book.genre}</p>`
            find = true;
        }

    }

    if (find === false) {
        alert("Manga introuvable 🤐");
    }
}

//afficher tous les mangas

//champs où afficher tous les mangas

const out2 = document.querySelector("#afficherTout");

// fonction quand on clique sur le bouton "tout"

const afficherTout = () => {


    afficher.style.display = "none";
    out2.style.display = "block";
    for (const book of tableau) {
        out2.innerHTML += `<p id="affichermanga">${book.titre}</p>
                          <p id="affichergenre">${book.genre}</p>`
    }

}




