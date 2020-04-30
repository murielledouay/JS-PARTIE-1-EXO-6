//on déclare la fonction du calcul quand on l'appelle
function clickFunction(){
  //on déclare la variable "Ma pointure" et on lui attribue une valeur, valeur de l'élément dont l'id est myShoeSize
  var myShoeSize = document.getElementById('myShoeSize').value;
  //on déclare la variable "Mon année de naissance""et on lui attribue une valeur, valeur de l'élément dont l'id est myYearOfBirth
  var myYearOfBirth = document.getElementById('myYearOfBirth').value;
  // on va vérifier grâce à une condition si notre variable nombre 2 est égal à zéro, alors on affichera un message d'erreur ; sinon on fait le calcul et on affiche de résultat du calcul
  if (myYearOfBirth == 0) {
    alert('calcul impossible, on ne divise pas par zéro');
  } else {
    var result = (myShoeSize * 2) + 5;
    var result = result * 50;
    var result = result - 1972;
    var result = result + 1770;
    alert('Ma pointure :' + myShoeSize + '\nMon année de naissance :' +  myYearOfBirth + '\nRésultat :' + result);
  }
}
