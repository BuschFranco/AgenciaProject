document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('inicio');
    const welcome = document.getElementById('welcomeSec-Conteiner');
    const welcomeHeight = welcome.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > welcomeHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});