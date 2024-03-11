const statut = document.querySelector("h2");// les informations concernant l'etat du jeu
let jeuActif = true;// on initie le jeu avec la valeur true donc le joueur est entrain de jouer
let joueurActif = "X";
let etatJeu = ["", "", "", "", "", "", "", "", ""];// au debut du jeu les cases sont vides
const conditionsVictoire = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// on declare les messages du jeu sous forme de fonction
const gagne = () => `le joueur ${joueurActif} a gagné`;
const egalite = () => "egalite";
const tourJoueur = () => `cest au tour du joueur ${joueurActif}`;
  


statut.innerHTML = tourJoueur()// le contenu html  de l'element que contient l'identifiant statut va etre remplacer par le resultat de la fonction
  document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClicCase))// appliquer la methode click a toutes les cases du jeu
document.querySelector("#recommencer").addEventListener("click", recommencer);//faire la meme chose pour le bouton recommencer

function gestionClicCase() {
  //on recupere l'index de la case cliquee
  const indexCase = parseInt(this.dataset.index);// recupere et converti en entier les valeurs de l'attribut data-index d'un elelment html sur lequel on a declenché un evenement
  // alert("indexCase") 
  if (etatJeu[indexCase] == !"" || !jeuActif) {// s'il nya pas le jeu sur une case ou le jeu est inactif on ne retourne rien
    return;
  }
  etatJeu[indexCase] = joueurActif;
  this.innerHTML = joueurActif;//ecrire dans la case
  verifGagne();
}

//fonction pour verifier si le joueur a gagné
function verifGagne() {
  let tourGagnant = false;//on initie le tour gagnant a false pour dire que cest pas un tour gagnant 
  //on declare les conditions de victoire possible et on verifie que l'une des cases est vides si cest le cas le jeu continue
  for (let conditionVictoire of conditionsVictoire) {
    const val1 = etatJeu[conditionVictoire[0]];
    const val2 = etatJeu[conditionVictoire[1]];
    const val3 = etatJeu[conditionVictoire[2]];
    if (val1 == "" || val2 == "" || val3 == "") {
      continue;
    }

    if (val1 == val2 && val2 == val3) {// si les 3 cases sont remplis on verifie si elles ont des valeurs egales"
      tourGagnant = true;
      break;
    }
  }
  if (tourGagnant) {
    statut.innerHTML = gagne();// si le tour est gagnant on affiche gagné
    
    jeuActif = false;
    return;
  }
  if (!etatJeu.includes("")) {// si le jeu n'inclut aucune case vide alors on affiche egalite
    statut.innerHTML = egalite();
    jeuActif = false;
    return;
  }
  // changer de joueur
  //joueurActif = joueurActif == "X" ? "0" : "X";
  if( joueurActif = joueurActif=="X"){
    joueurActif="0"
  }
  else{
    joueurActif="X"
  }
  statut.innerHTML = tourJoueur();
}

// on reinitialise toutes les valeurs
  function recommencer() {
    joueurActif = "X";
    jeuActif = true;
    etatJeu = ["", "", "", "", "", "", "", "", ""];
    statut.innerHTML = tourJoueur();
    document.querySelectorAll(".case").forEach((cell) => (cell.innerHTML = ""));// on efface toutes les cases du jeu
  }

