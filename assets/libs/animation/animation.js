document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const animation = card.dataset.animation;

                const index = Array.from(cards).indexOf(card);
                const totalDelay = index * 200;

                setTimeout(() => {
                    if (animation === "word-fade-in") {
                        const words = card.innerHTML.trim().split(" ");
                        card.innerHTML = words.map((word, i) =>
                            `<span class="fade-word" style="animation-delay: ${i * 0.1}s">${word}</span>`
                        ).join(" ");
                    } else {
                        card.classList.add(animation);
                    }

                    card.style.visibility = "visible";
                    card.style.opacity = "1";
                    observer.unobserve(card);
                }, totalDelay);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    cards.forEach(card => {
        card.style.visibility = "hidden";
        observer.observe(card);
    });
});