// Smooth Scroll for navigation menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash) {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar background change on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0, 0, 0, 0.3)";
        nav.style.backdropFilter = "blur(8px)";
    } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
    }
});

// Placeholder for future functions (mobile menu etc.)
console.log("Landing page loaded successfully");
