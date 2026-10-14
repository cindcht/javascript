// Tableau des mangas

const tableau = [
    {
        id: 1,
        titre: "Naruto",
        genre: "shonen",
        auteur: "Masashi Kishimoto",
        annee: 1999,
        prix: 7.50,
        dateAjout: "2026-10-14T10:00:00.000Z"
    },
    {
        id: 2,
        titre: "One Piece",
        genre: "shonen",
        auteur: "Eiichiro Oda",
        annee: 1997,
        prix: 7.20,
        dateAjout: "2026-10-14T10:05:00.000Z"
    },
    {
        id: 3,
        titre: "ReZero",
        genre: "isekai",
        auteur: "Tappei Nagatsuki",
        annee: 2012,
        prix: 8.90,
        dateAjout: "2026-10-14T10:10:00.000Z"
    }
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

    afficher.style.display = "block";
    out2.style.display = "none";

    if (resultats.length === 0) {
        afficher.innerHTML = "<p>Aucun manga trouvé 🤐</p>";
        return;
    }

    afficher.innerHTML = resultats.map((book) => `
        <article class="carte">
            <h2>${book.titre}</h2>
            <p>Genre : ${book.genre}</p>
            <p>Auteur : ${book.auteur}</p>
            <p>Année : ${book.annee}</p>
            <p>Prix : ${book.prix.toFixed(2)} €</p>
        </article>
    `).join("");
};

//afficher tous les mangas

//champs où afficher tous les mangas

const out2 = document.querySelector("#afficherTout");

// fonction quand on clique sur le bouton "tout"

const afficherTout = () => {
    afficher.style.display = "none";
    out2.style.display = "block";

    out2.innerHTML = tableau.map((manga) => {
        return `
            <article class="carte">
                <h2>${manga.titre}</h2>
                <p>Genre : ${manga.genre}</p>
                <p>Auteur : ${manga.auteur}</p>
                <p>Année : ${manga.annee}</p>
                <p>Prix : ${manga.prix.toFixed(2)} €</p>
            </article>
        `;
    }).join("");
};


//afficher le prix moyen des mangas 

const prixMoyen = tableau.reduce((somme, manga) => {
    return somme + manga.prix;
}, 0) / tableau.length;

document.querySelector("#prixMoyen").textContent =
    prixMoyen.toFixed(2) + " €";



//ajouter un manga au tableau

//où afficher ajouter le manga

// Ajouter un manga

formAjout.addEventListener("submit", (event) => {
    event.preventDefault();

    const nouveauManga = {
        id: Date.now(),
        titre: document.querySelector("#nouveauTitre").value.trim(),
        genre: document.querySelector("#nouveauGenre").value.trim(),
        auteur: document.querySelector("#nouvelAuteur").value.trim(),
        annee: Number(document.querySelector("#nouvelleAnnee").value),
        prix: Number(document.querySelector("#nouveauPrix").value),
        dateAjout: new Date().toISOString()
    };

    // Récupérer les infos de l'ajout

    const formAjout = document.querySelector("#formAjout");


    // Ajouter le manga au tableau
    tableau.push(nouveauManga);

    // Sauvegarder le tableau dans le navigateur
    sauvegarderMangas();

    // Vider le formulaire
    formAjout.reset();

    // Confirmer l'ajout
    alert("Manga ajouté et sauvegardé avec succès !");

    // Actualiser l'affichage si cette fonction existe
    if (typeof afficherTout === "function") {
        afficherTout();
    }
});

// Fonction pour sauvegarder les mangas

const sauvegarderMangas = () => {
    localStorage.setItem("mangas", JSON.stringify(tableau));
};

// Charger les mangas sauvegardés
const mangasSauvegardes = localStorage.getItem("mangas");

if (mangasSauvegardes !== null) {
    tableau = JSON.parse(mangasSauvegardes);
}










