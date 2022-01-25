let lap = 1;
let tab = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let arrayHtml = document.querySelectorAll(".cell");
let isWin = false;


/*function play(element) {
 
 if(element.innerHTML ===""){
  if (lap % 2 != 0) {
    element.innerHTML = "X";
  } else {
    element.innerHTML = "O";
  }}
  win();
  if (isWin === false){
  checkTie();
}
  lap++;
} */


function randArray(){
    //tableau vide qui contiendras tous les index vide de ma grille de jeu
    let cpuArray = []
    // je parcour ma grille de jeu
    for(let i = 0; i < arrayHtml.length; i++){
        // si la case est vide 
        if(arrayHtml[i].innerHTML == ''){
            // je push l'index 
            cpuArray.push(i)
        }
    }
    // je crée un variable et je lui affecte un nombre aleatoire entre 0 et la longueur de mon tableau d'index - 1
    let rand = getRandom(0, cpuArray.length -1)
    // je fais cliquer l'ia sur la case de ma grille qui correspond a une valeur aleatoire de mon tableau d'index
    arrayHtml[cpuArray[rand]].click()
}
// la fonction random
function getRandom(min, max) {    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function play(element) {
 if(!isWin){

    if(element.innerHTML ===""){
     if (lap % 2 != 0) {
       element.innerHTML = "X";
     } else {
        element.innerHTML = "O";
     }
     lap++;
    }
     win();
     if (isWin === false){
     checkTie();
   }else{
       return;
   }
    win();
     if(lap % 2 === 0){
        randArray();
     }
   }
}


function win() {
    for (let i = 0; i < tab.length; i++) {
        let a = arrayHtml[tab[i][0]].innerHTML;
        let b = arrayHtml[tab[i][1]].innerHTML;
        let c = arrayHtml[tab[i][2]].innerHTML;
        if (a == b && b == c) {
          if (a == "O") {
            document.querySelector("#winner").innerHTML = "Bravo au Joueur 2 qui gagne cette partie";
            isWin = true;
          } else if (a == "X") {
            document.querySelector("#winner").innerHTML = "Bravo au Joueur 1 qui gagne cette partie";
            isWin = true ;
          }
          }
        }
      } 
      
      function checkTie() {
        let count = 0;                             
          for (let i = 0; i < arrayHtml.length; i++) {  
              if (arrayHtml[i].innerHTML != "") {       
              count++;                             
              }
          }
          if (count === 9) {                   
              document.querySelector("#winner").innerHTML = "Match null !! Hey Hey!!";                           
        }
      }