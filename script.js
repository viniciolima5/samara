document.addEventListener('DOMContentLoaded', () => {

    // --- INTERAÇÃO 1: Animação de Fade-in ao Rolar a Página ---
    const fadeElems = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

    // --- INTERAÇÃO 2: Inicialização do Carrossel Swiper.js (NOVO) ---
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow", // Efeito visual do carrossel
        grabCursor: true, // Mostra uma mãozinha ao passar o rato
        centeredSlides: true, // Slide ativo fica no centro
        slidesPerView: "auto", // Mostra a quantidade de slides que couber
        loop: true, // Faz o carrossel ser infinito
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination", // Elemento da paginação (bolinhas)
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next", // Elemento da seta "próximo"
            prevEl: ".swiper-button-prev", // Elemento da seta "anterior"
        },
    });


    // --- INTERAÇÃO 3: Galeria de Imagens Interativa (Modal) - ATUALIZADO ---
    // Esta função continua a funcionar para que, ao clicar numa imagem do carrossel,
    // ela abra em tela cheia.

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    // ATUALIZADO: Agora seleciona as imagens dentro dos slides do carrossel
    const galleryItems = document.querySelectorAll('.swiper-slide img'); 
    const closeBtn = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// --- CONTROLO DA MÚSICA DE FUNDO (RECOMENDADO) ---
const musicaFundo = document.getElementById('musica-fundo');
const controleMusica = document.getElementById('controle-musica');

// Define o volume inicial (opcional, 0.5 = 50% do volume)
musicaFundo.volume = 0.25;

controleMusica.addEventListener('click', () => {
    // Verifica se a música está pausada
    if (musicaFundo.paused) {
        musicaFundo.play();
        controleMusica.innerHTML = '⏸️'; // Muda o ícone para pause
    } else {
        musicaFundo.pause();
        controleMusica.innerHTML = '🎵'; // Muda o ícone para play
    }
});