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

// afficher les petits tableaux du grand tableau

const tab1 = tableau.slice(0, 2);
const tab2 = tableau.slice(2, 4);
const tab3 = tableau.slice(4, 6);


const afficherTout = () => {
    afficher.style.display = "block";
    out.innerHTML =
        ` voici tous nos mangas : <p>  ${tab1} </p>
        ${tab2} 
        ${tab3}  `

}
