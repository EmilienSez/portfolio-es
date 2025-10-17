const cards = document.querySelectorAll('.STImgcardLogo');
const copyrightMessage = document.getElementById('copyrightMessage');
const cardsCertification = document.querySelectorAll('.cardCertification');
const currentYear = new Date().getFullYear();
copyrightMessage.textContent = `© Copyright ${currentYear} Sezestre Emilien`;

cards.forEach(card => {
    const img = card.querySelector('.STImgLogo');
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover; // tu peux mettre le chemin hover dans un attribut data-hover

    card.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    card.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});

cardsCertification.forEach(card => {
    const img = card.querySelector('.imgCertificationLogo');
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover; // tu peux mettre le chemin hover dans un attribut data-hover

    card.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    card.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});

document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const nextButton = container.querySelector('.next');
    const prevButton = container.querySelector('.prev');
    const cards = container.querySelectorAll('.cardProjet');
    const dotsContainer = container.querySelector('.carousel-dots');

    let index = 0;

    // --- Création dynamique des "dots"
    cards.forEach((_, i) => {
        if (i + 1 == cards.length);
        else {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);

            // clic sur un dot = aller directement à la carte correspondante
            dot.addEventListener('click', () => {
                index = i;
                updateCarousel();
                if (index == 0) {
                    prevButton.style.display = 'none';
                }
                else {
                    prevButton.style.display = 'block';
                }
                if (index == cards.length-2) {
                    nextButton.style.display = 'none';
                }
                else {
                    nextButton.style.display = 'block';
                }
            });
        }
    });
    if (cards.length <= 2) {
        // dotsContainer.style.display = 'none';
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
    }
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    prevButton.style.display = 'none';
    function updateCarousel() {
        const visibleCards = Math.floor(container.offsetWidth / cards[0].offsetWidth);
        const offset = index * (cards[0].offsetWidth + 20);
        track.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    }

    nextButton.addEventListener('click', () => {
        const visibleCards = Math.floor(container.offsetWidth / cards[0].offsetWidth);
         if (index < cards.length - visibleCards) {
            if (index == 0) {
                prevButton.style.display = 'block';
            }
            index++;
            updateCarousel();
            if (index == cards.length-2) {
                nextButton.style.display = 'none';
            }
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateCarousel();
            nextButton.style.display = 'block';
            if (index == 0) {
                prevButton.style.display = 'none';
            }
        }
    });
});

