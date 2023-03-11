// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = 0;

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

nombreAleatoire = genererNombreEntier(1001);

//console.log(nombreAleatoire);

let coups = 0;
let nombreChoisi;
  
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', ()=>{
    if(isNaN(input.value)){
        error.style.display = "inline";
    }else{
        error.style.display = "none";
    }
});

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){

    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire){
        //cest plus
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est plus!";
        instruction.className = "instruction plus";

    }else if(nombre > nombreAleatoire){
        //cest moins
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est moins!";
        instruction.className = "instruction moins";

    }else{
        //cest le juste prix
        instruction.textContent = "#" + coups + "(" + nombre + ") felicitation vous avez trouver le juste prix!";
        instruction.className = "instruction fini";
        input.disabled = true;
    }

    //ajouter l'element devant les autres.
    document.querySelector('#instructions').prepend(instruction);
}

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == ''){
        input.style.borderColor = "Red";
    }else{
        coups++;
        input.style.borderColor  = "Silver";
        nombreChoisi = input.value;
        input.value = '';

        verifier(nombreChoisi);
    }
});

