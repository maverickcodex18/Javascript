function bmi(weight,height){
    return weight/(height*height);
}

var weight=prompt("Your Weight in KG: ");
var height=prompt("Your Height in metres: ");

alert(bmi(weight,height));
