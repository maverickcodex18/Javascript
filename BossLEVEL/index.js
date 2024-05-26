var randomP1=1+Math.floor(Math.random()*6);
var randomP2=1+Math.floor(Math.random()*6);

var diceSrcP1="dice"+randomP1+".png";
var diceSrcP2="dice"+randomP2+".png";

document.querySelector("#diceP1").setAttribute("src","./assets/assets/images/"+diceSrcP1);
document.querySelector("#diceP2").setAttribute("src","./assets/assets/images/"+diceSrcP2);

if(randomP1>randomP2) document.querySelector("h1").textContent="Player 1 Wins";
else if(randomP1<randomP2) document.querySelector("h1").textContent="Player 2 Wins";
else document.querySelector("h1").textContent="Match Drawn";
