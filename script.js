// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("#accueil h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("#accueil p", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from("#accueil .cta", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 1,
    ease: "power2.out"
});

// Timeline Animation
gsap.from(".event", {
    scrollTrigger: {
        trigger: ".event",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
});

// Skill Hover Effect
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        gsap.to(skill, { scale: 1.1, duration: 0.3 });
    });
    skill.addEventListener('mouseleave', () => {
        gsap.to(skill, { scale: 1, duration: 0.3 });
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config chargée !');
});