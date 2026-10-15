
// Formulaire d'ajout
const formAjout = document.querySelector("#formAjout");

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

    tableau.push(nouveauManga);

    sauvegarderMangas();
    formAjout.reset();

    alert("Le manga a été ajouté !");

    afficherTout();
    calculerPrixMoyen();
});
