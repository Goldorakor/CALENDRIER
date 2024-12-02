document.addEventListener('DOMContentLoaded', () => {
    // On sélectionne les éléments nécessaires
    const fenetresContainer = document.getElementById('calendrier');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModal = document.querySelector('.close');

    // Tableau des messages pour chaque jour
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

    // Fonction pour ouvrir la modale et afficher un message
    function ouvrirModal(message) {
        modalMessage.textContent = message;
        modal.classList.add('show');
    }

    // Fonction pour fermer la modale
    function fermerModal() {
        modal.classList.remove('show');
        modalMessage.textContent = '';
    }

    // Fermer la modale quand l'utilisateur clique sur la croix
    closeModal.addEventListener('click', fermerModal);

    // Fonction pour mélanger les jours et affecter des couleurs aléatoires
    function genererFenetre(jour) {
        const fenetre = document.createElement('div');
        fenetre.classList.add('fenetre');
        fenetre.textContent = jour;
        fenetre.dataset.jour = jour;

        // Attribuer une couleur aléatoire à la fenêtre
        const couleurs = ['#08558B', '#347CBC', '#ACE0F8', '#6F93AF', '#D4BAA4', '#4C3626'];
        fenetre.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];

        // Ajouter un événement de clic pour ouvrir la modale avec un message spécifique
        fenetre.addEventListener('click', () => {
            const message = messages[jour - 1]; // On utilise l'indice du jour pour obtenir le message
            ouvrirModal(message);
        });

        return fenetre;
    }

    // Mélanger les jours (1 à 24)
    const jours = Array.from({ length: 24 }, (_, i) => i + 1); // Crée un tableau [1, 2, ..., 24]
    jours.sort(() => Math.random() - 0.5); // Mélange aléatoirement les jours

    // Créer et ajouter les fenêtres dans l'HTML
    jours.forEach(jour => {
        const fenetre = genererFenetre(jour);
        fenetresContainer.appendChild(fenetre);
    });
});
