const touches = [...document.querySelectorAll(".bouton")];

// console.log(touches);

const listeKeyCode = touches.map((touche) => touche.dataset.key);

const ecran = document.querySelector('.ecran')
// console.log(listeKeyCode);

document.addEventListener("keydown", (e) => {
  const valeur = e.key;
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeyCode.includes(valeur)) {
    switch (valeur) {
        case '8':
            ecran.textContent = "";       
            break;
        case '13':
            const calcul = eval(ecran.textContent);
            ecran.textContent = calcul;
            break;
        default:
            const indexKeyCode = listeKeyCode.indexOf(valeur);
            const touche = touches[indexKeyCode];
            ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener('error', (e) => {
    alert('Une erreur est servenue dans votre calcul : ' + e.message)
})
