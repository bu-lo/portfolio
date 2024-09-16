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

// Sélectionner le curseur et les articles
const slider = document.getElementById('articleSlider');
const articles = document.querySelectorAll('.article');

// Fonction pour afficher l'article correspondant à la valeur du slider
function showArticle(value) {
    // Masquer tous les articles
    articles.forEach(article => {
        article.classList.remove('active');
    });
    
    // Afficher l'article correspondant
    const selectedArticle = document.getElementById(`article${value}`);
    selectedArticle.classList.add('active');
}

// Écouter les changements sur le slider
slider.addEventListener('input', function() {
    showArticle(this.value);
});

// Initialisation de l'affichage (afficher le premier article au chargement)
showArticle(slider.value);