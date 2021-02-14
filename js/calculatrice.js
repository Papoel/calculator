const radioElement = 
  {
    iso1: { isotope : "Ir192", fullName : "Irridium 192", periode : 74 },
    iso2: { isotope : "Se75", fullName  : "Sellenium 75", periode : 119.78 },
    iso3: { isotope : "Co60", fullName  : "Cobalt 60",    periode : 1923.55 }
  }

/* 
  * Activité J0 /  2^(Nb jours ecoulés / période)
  + Recuperer la periode de l'isotope choisis => ok
  + div conditionelle qui affichera le nb de jour écoulé entre 2 dates => ok
  + Fonction de calcul du Nb de jours écoulé entre deux dates
*/

//  - Je récupère la période de l'isotope choisis par le user
getPeriodChoice = () => {
  select = document.getElementById('isotopes').value;
  console.log(radioElement[select].periode)
}

//  Date du jour =
let dateJ0 = new Date()
// * Jour de la semaine
let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
let day = days[dateJ0.getDay()]
// * Date du jour
let date = dateJ0.getDate()
// * Mois en cours
let months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "decembre"];
let month = months[dateJ0.getMonth()]
// * Année en cours
year = dateJ0.getFullYear()
// * Date Complète
let fulllDate = day + ' ' + date + ' ' + month + ' ' + year



//!
document.getElementById('date-full').innerHTML = dateJ0
//!

// - Mise en forme de ma DIV qui va recupéréer le nb de jour écouler entre les 2 dates
const nbJour = document.getElementById('nbJour')
// ? Ajouter du texte dans ma div => nbJour.textContent = fulllDate


if (!nbJour.firstChild.text) {
  nbJour.classList.add("text-center", "border", "border-success", "p-3", "my-3")
} else {
  nbJour.classList.remove("text-center", "border", "border-success", "p-3", "my-3")
}

