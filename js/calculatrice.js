const radioElement = 
  {
    iso1: { isotope : "Ir192", fullName : "Irridium 192", periode : 74 },
    iso2: { isotope : "Se75", fullName  : "Sellenium 75", periode : 119.78 },
    iso3: { isotope : "Co60", fullName  : "Cobalt 60",    periode : 1923.55 }
  }

/* 
  * Activité J0 /  2^(Nb jours ecoulés / période)
  + Fonction de calcul du Nb de jours écoulé entre deux dates
*/
const dateJ0 = new Date().toLocaleString()

//  - Je récupère la période de l'isotope choisis par le user
getPeriodChoice = () => {
  select = document.getElementById('isotopes').value;
  console.log(radioElement[select].periode)
}

// - Mise en forme de ma DIV qui va recupéréer le nb de jour écouler entre les 2 dates
const nbJour = document.getElementById('nbJour')
if (!nbJour.firstChild.text) {
  nbJour.classList.add("text-center", "border", "border-success", "p-3", "my-3")
} else {
  nbJour.classList.remove("text-center", "border", "border-success", "p-3", "my-3")
}

console.log(nbJour);