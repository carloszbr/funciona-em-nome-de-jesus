// Seleciona todas as estrelas
const stars = document.querySelectorAll('.star');

// Adiciona evento de clique em cada estrela
stars.forEach(star => {
    star.addEventListener('click', function () {
        const rating = this.getAttribute('data-value');

        // Atualiza as estrelas selecionadas
        const movieCard = this.closest('.movie-card');
        const allStars = movieCard.querySelectorAll('.star');

        allStars.forEach(star => {
            star.classList.remove('selected');
        });

        for (let i = 0; i < rating; i++) {
            allStars[i].classList.add('selected');
        }
    });
});
