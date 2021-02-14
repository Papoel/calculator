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

// + ==> DATE DU JOUR <==
// * Date du jour 
let now = new Date()
// * Date au format jj/mm/aaaa
let DateJ0 = now.toLocaleDateString('fr-FR')

// + ==> DATE SAISIE PAR L'UTILISATEUR <==

/*
  * Fonction qui calcul la différence entre deux dates (T = Temps écoulé)
*/

T = (d1, d2) => {
  return ( d2 - d1 )
}

//! 
/*
  ! Trouver le moyen de calculer l'écart entre deux dates ...
*/
//!
// - Mise en forme de ma DIV qui va recupéréer le nb de jour écouler entre les 2 dates
const nbJour = document.getElementById('nbJour')
// ? Ajouter du texte dans ma div => nbJour.textContent = fulllDate


if (!nbJour.firstChild.text) {
  nbJour.classList.add("text-center", "border", "border-success", "p-3", "my-3")
} else {
  nbJour.classList.remove("text-center", "border", "border-success", "p-3", "my-3")
}

