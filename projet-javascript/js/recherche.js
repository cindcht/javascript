
// Champs du formulaire
const manga = document.querySelector("#manga");
const genre = document.querySelector("#genre");

// Zones où afficher les résultats
const affichermanga = document.querySelector("#affichermanga");
const affichergenre = document.querySelector("#affichergenre");
const afficherimage = document.querySelector("#afficherimage");
const afficher = document.querySelector("#afficher");
const messageRecherche = document.querySelector("#message");
const out = document.querySelector("#afficher");
const out2 = document.querySelector("#afficherTout");

// Rechercher un manga
const afficherCarte = (event) => {
    event.preventDefault();

    const rechercheTitre = manga.value.trim().toLowerCase();
    const rechercheGenre = genre.value.trim().toLowerCase();

    const resultats = tableau.filter((book) => {
        const titreCorrespond =
            rechercheTitre === "" ||
            book.titre.toLowerCase().includes(rechercheTitre);

        const genreCorrespond =
            rechercheGenre === "" ||
            book.genre.toLowerCase().includes(rechercheGenre);

        return titreCorrespond && genreCorrespond;
    });

    out.innerHTML = resultats.map((book) => `
        <article class="carte">
            <h2>${book.titre}</h2>
            <p>Genre : ${book.genre}</p>
            <p>Auteur : ${book.auteur}</p>
            <p>Année : ${book.annee}</p>
            <p>Prix : ${book.prix.toFixed(2)} €</p>
        </article>
    `).join("");

    if (resultats.length === 0) {
        out.innerHTML = "<p>Aucun manga trouvé.</p>";
    }

    afficher.style.display = "block";
    out2.style.display = "none";
};

// Afficher tous les mangas
const afficherTout = () => {
    afficher.style.display = "none";
    out2.style.display = "block";

    out2.innerHTML = tableau.map((manga) => `
        <article class="carte">
            <h2>${manga.titre}</h2>
            <p>Genre : ${manga.genre}</p>
            <p>Auteur : ${manga.auteur}</p>
            <p>Année : ${manga.annee}</p>
            <p>Prix : ${manga.prix.toFixed(2)} €</p>
        </article>
    `).join("");
};
