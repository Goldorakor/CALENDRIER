// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Le code ici sera exécuté une fois que tout le DOM est chargé


// on sélectionne tous les éléments avec la classe 'fenêtre'
const fenetres = document.querySelectorAll('.fenetre');

// on sélectionne l'élément HTML ayant l'id 'modal', qui est la modale contenant le message à afficher.
const modal = document.getElementById('modal');

// on sélectionne l'élément HTML ayant l'id 'modal-message', à l'intérieur de la modale. Cet élément affichera le message associé au jour cliqué.
const modalMessage = document.getElementById('modal-message');

// on sélectionne l'élément avec la classe 'close', c'est-à-dire le bouton de fermeture de la modale en cours.
const closeModal = document.querySelector('.close');

// on définit notre constante messages = tableau de messages (un message par jour)
const messages = [
  "Bienvenue dans la magie de Noël ! 🎄",
  "Préparez-vous pour une surprise ! 🎁",
  "Un chocolat chaud, ça vous dit ? ☕",
  "Jour de fête, jour de joie ! 🌟",
  "Un Noël plein de rires et de cadeaux ! 🎅",
  "Chantons des cantiques de Noël ! 🎶",
  "C'est le moment de décorer le sapin ! 🎄",
  "Un sourire, c'est Noël dans le cœur. 😊",
  "Bonheur et chocolat : la recette parfaite ! 🍫",
  "Partagez un câlin, c'est la saison ! 🤗",
  "Une étoile brille pour vous ce soir. ✨",
  "Le Père Noël se prépare ! 🎅",
  "Ouvrez cette fenêtre pour de la magie ! 🪄",
  "Les flocons dansent dans le vent. ❄️",
  "Un bon repas en famille, c'est Noël. 🍽️",
  "C'est la saison des miracles ! 🎁",
  "Un chocolat par jour, c'est la règle ! 🍬",
  "Prenez un moment pour vous détendre. 🌟",
  "Comptez les étoiles et faites un vœu. ⭐",
  "Un parfum de cannelle flotte dans l'air. 🍪",
  "Le sapin brille de mille feux. 🎄",
  "Rêvez d'un Noël blanc. ❄️",
  "Un peu de magie pour ce jour spécial. ✨",
  "Joyeux Noël à tous et à toutes ! 🎅"
];


// fonction pour ouvrir la modale et afficher un message (celui en paramètre)
function ouvrirModal(message) {
    console.log('Message:', message); // on vérifie que le bon message est passé
    modalMessage.textContent = message; /* on affiche le message dans l'élément de la modale ayant l'id 'modal-message' */
    // modal.style.display = 'flex'; /* on change le style pour rendre la modale visible */
    modal.classList.add('show')
}


// fonction pour fermer la modale et remettre le message à un message vide
function fermerModal() {
    modal.style.display = 'none'; /* on cache la modale */
    modalMessage.textContent = '';
   /* modal.classList.remove('show');  on retire la classe 'show' à la modale pour la rendre invisible : elle retourne en class 'hidden' -> à l'aide de style du fichier CSS */
}


// événement : clic sur la croix de fermeture -> on appelle la fonction fermerModal
closeModal.addEventListener('click', fermerModal);


console.log("hello");
console.log(fenetres);
console.log("hello");


// Gestion des clics sur les fenêtres
fenetres.forEach((fenetre, index) => {  // on parcourt le tableau fenetres.
    console.log(fenetre); // on affiche pour trouver une panne : on vérifie que chaque fenêtre est bien traitée
    fenetre.addEventListener('click', () => { // on ajoute un écouteur d'évènements (click)
        const message = messages[index]; // cette ligne choisit un message à partir du tableau messages.
        ouvrirModal(message); // appelle la fonction ouvrirModal pour afficher le message dans la modale lorsque l'utilisateur clique sur la fenêtre
    });
});


});
