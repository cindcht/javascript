
// Calculer le prix moyen
const calculerPrixMoyen = () => {
    let prixMoyen = 0;

    if (tableau.length > 0) {
        prixMoyen = tableau.reduce(
            (somme, manga) => somme + manga.prix,
            0
        ) / tableau.length;
    }

    document.querySelector("#prixMoyen").textContent =
        prixMoyen.toFixed(2) + " €";
};
