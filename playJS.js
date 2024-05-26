var decision=prompt("Press 1: Change Color , 2:Change Visibility , 3: Italics");
alert("You Have Chosen: "+decision);
if(decision=='1'){
    document.querySelector("button").style.backgroundColor='brown';
}
else if(decision=='2'){
    document.querySelector('button').classList.toggle('buttonVisibility');
}
else if(decision=='3'){
    document.querySelector('button').innerHTML="<em>Click Me!</em>"
}
else alert("Invalid Choice !");
