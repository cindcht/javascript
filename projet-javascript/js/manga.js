
// Tableau des mangas
let tableau = [];

// Charger les mangas depuis le fichier JSON
const chargerMangas = async () => {
    const reponse = await fetch("./data/manga.json");
    tableau = await reponse.json();

    const sauvegarde = localStorage.getItem("mangas");

    if (sauvegarde !== null) {
        tableau = JSON.parse(sauvegarde);
    }

    // Calculer le prix moyen
    calculerPrixMoyen();
};

// Sauvegarder les mangas dans le navigateur
const sauvegarderMangas = () => {
    localStorage.setItem("mangas", JSON.stringify(tableau));
};

// Lancer le chargement
chargerMangas();
