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


function transferToForm(description) {
    // Transferir la información al formulario
    document.getElementById('mensaje').value = `Estoy interesado en el plan "${description}". Tengo varias ideas para mi página y me gustaría discutirlas en detalle... `;
    
    // Opcional: Desplazarse hasta el formulario
    document.getElementById('contact-Title').scrollIntoView({ behavior: 'smooth' });
  }