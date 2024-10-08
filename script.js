/* ON LOAD RESET */
window.onload = function () {
    window.scrollTo(0, 0); // Forcer le scroll en haut au chargement
};

document.activeElement.blur();

if (window.location.hash) {
    window.history.replaceState(null, null, ' ');
    window.scrollTo(0, 0); // Remonter en haut
}


/* HEADER SCROLLLING */

window.addEventListener("scroll", function () {
    const header = document.getElementById("header_header");
    const fixedHeader = document.getElementById("fixed-header");

    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom < 0) {
        fixedHeader.classList.remove("hidden");
    } else {
        fixedHeader.classList.add("hidden");
    }
});


/* TIMELINE */

// Sélectionner le curseur, les articles et les éléments de texte sous le curseur
const slider = document.getElementById('articleSlider');
const articles = document.querySelectorAll('.article');
const ticks = document.querySelectorAll('.slider-ticks span'); // Sélectionner les éléments de texte sous le curseur

// Fonction pour afficher l'article correspondant à la valeur du slider
function showArticle(value) {
    // Masquer tous les articles
    articles.forEach(article => {
        article.classList.remove('active');
    });

    // Retirer la classe active de tous les textes
    ticks.forEach(tick => {
        tick.classList.remove('active');
    });

    // Afficher l'article correspondant
    const selectedArticle = document.getElementById(`article${value}`);
    if (selectedArticle) {
        selectedArticle.classList.add('active');
    }

    // Ajouter la classe active au texte correspondant
    const selectedTick = document.querySelector(`.slider-ticks span[data-index="${value}"]`);
    if (selectedTick) {
        selectedTick.classList.add('active');
    }

    // Scroller vers l'article correspondant (défilement fluide)
    scrollToArticle(selectedArticle);
}

// Fonction pour effectuer un défilement fluide vers l'article
function scrollToArticle(article) {
    const headerOffset = 220; // Hauteur du header fixe (ajustez selon vos besoins)
    const elementPosition = article.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Écouter les changements sur le slider
slider.addEventListener('input', function () {
    showArticle(this.value);
});

// Écouter les clics sur les textes sous le curseur
ticks.forEach(tick => {
    tick.addEventListener('click', function () {
        const newValue = this.getAttribute('data-index'); // Obtenir l'index depuis l'attribut data-index
        slider.value = newValue; // Met à jour la valeur du curseur
        showArticle(newValue); // Affiche l'article correspondant
    });
});

// Initialisation de l'affichage (afficher l'article correspondant à la valeur actuelle du slider)
showArticle(slider.value);


/* LINK HEADER DEBUG */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 120; // Hauteur du header fixe (ajustez selon vos besoins)
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


/* UP */

window.onscroll = function () {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Montre le bouton après avoir scrollé de 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/* MENU BURGER */

document.addEventListener('DOMContentLoaded', function() {
    const headers = [
        document.getElementById('header_header'),
        document.getElementById('fixed-header')
    ];

    headers.forEach((header) => {
        const burgerIcon = header.querySelector('.burger-icon'); // Sélectionne l'icône burger de chaque header
        const menu = header.querySelector('.ul_header'); // Sélectionne le menu de chaque header

        // Toggle pour ouvrir/fermer le menu lors du clic sur l'icône burger
        burgerIcon.addEventListener('click', function() {
            header.classList.toggle('show-menu');
        });

        // Ferme le menu lorsque l'utilisateur quitte la zone du menu
        menu.addEventListener('mouseleave', function() {
            header.classList.remove('show-menu');
        });

        // Ferme le menu lorsque l'utilisateur clique sur un lien
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                header.classList.remove('show-menu');
            });
        });

        // Ferme le menu si on clique en dehors du menu ou du burger icon
        document.addEventListener('click', function(event) {
            if (!header.contains(event.target) && !burgerIcon.contains(event.target)) {
                header.classList.remove('show-menu');
            }
        });
    });
});
