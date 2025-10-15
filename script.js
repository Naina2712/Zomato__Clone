// Highlight input on focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 15px rgba(203,32,45,0.7)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = 'none';
});

// Simple animation on page load
window.addEventListener('load', () => {
    document.querySelector('header').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('header').style.transition = 'opacity 1s ease-in-out';
        document.querySelector('header').style.opacity = '1';
    }, 200);
});

// Search bar placeholder animation
const placeholders = [
    "Search for restaurants...",
    "Search for cuisines...",
    "Search for dishes..."
];
let i = 0;

setInterval(() => {
    searchInput.placeholder = placeholders[i];
    i = (i + 1) % placeholders.length;
}, 2500);
