gsap.to(".fade-in-up", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
});

gsap.set(".fade-in-up", {y: 30});

gsap.to(".fade-in-down", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
});

gsap.set(".fade-in-down", {y: -30});

document.addEventListener("DOMContentLoaded", function () {
    animateWords(".word-fade-in");
});

function animateWords(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const words = el.innerText.split(" ");
        el.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(" ");
        const spans = el.querySelectorAll(".word");
        gsap.set(spans, {opacity: 0});
        gsap.to(spans, {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.3
        });
    });
}
