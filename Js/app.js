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
    document.getElementById('contact-desc').scrollIntoView({ behavior: 'smooth' });
  }


  //función que se encarga de detectar los valores de la lista de idiomas
  function handleDropdownChange() {
    var selectElement = document.getElementById("opciones");
    var selectedValue = selectElement.value;
    changeLanguage(selectedValue);
}

  const textsToChange = document.querySelectorAll("[data-section]");
  //función que devuelve el valor de la lista
  async function changeLanguage(language){
    const requestJson = await fetch(`./Languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange)
      {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
      }

      console.log(texts["comoTrabajamos"]);
  }

  