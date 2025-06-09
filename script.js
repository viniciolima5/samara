document.addEventListener('DOMContentLoaded', () => {

    // --- INTERAÇÃO 1: Animação de Fade-in ao Rolar a Página ---
    // Esta função faz com que os elementos apareçam suavemente no ecrã.

    const fadeElems = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // usa a viewport do navegador
        rootMargin: '0px',
        threshold: 0.1 // o elemento é considerado visível quando 10% dele está no ecrã
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // para a observação depois de animar
            }
        });
    }, observerOptions);

    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

    // --- INTERAÇÃO 2: Galeria de Imagens Interativa (Modal) ---
    // Esta função faz com que, ao clicar numa imagem, ela apareça em tamanho grande.

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.querySelector('.close-button');

    // Percorre todas as imagens da galeria e adiciona um "ouvinte" de clique
    galleryItems.forEach(item => {
        item.onclick = function() {
            modal.style.display = "block"; // Mostra o modal
            modalImg.src = this.src; // Define a imagem do modal como a imagem clicada
            captionText.innerHTML = this.alt; // Usa o texto 'alt' como legenda
        }
    });

    // Função para fechar o modal ao clicar no 'X'
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Função para fechar o modal ao clicar fora da imagem
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});