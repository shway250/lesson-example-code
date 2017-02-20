4==4;
//evaluates as true
4==3;
//evaluates as false


17=="17";
//evaluates as true
0 == false;
//evaluates as true
1 == true;
//evaluates as true 


40 === 40;
//true
"Nicolas Cage" === "nicolas cage";
//false



12 < -500;
//false
12 < 1729
//true (RAMANUJAN'S NUMBER) 
13 >= 13;
//true
16 != 17;
//true
16 != 16;
//false
16 !== "16";
//true



(1 > 2) && (15 === 15);
//False since 4 isn’t greater than 5



(1 > 2) || (15 === 15);
//true since at least one of the statements is true



!(1 > 2) && (15 === 15);
//true because the not operator negates the first statement 



if(true){
   console.log("this is for sure going to print out");
}

if(500 === 500){
   console.log("It's print time dawg!");
}

if(false){
     console.log("This is never going to print");
}




var jackson = "badass";
if(jackson ==="loser"){
     console.log("What you talkin' 'bout Willis?");
}else{
     console.log("Ur damn right!");
}



var sandwich = "dagwood";
if (sandwich === "pastrami") {
  console.log("WOW! That’s a spicy meatball!!!");
} else if (sandwich === "dagwood") {
  console.log("I think I need to unhinge my jaw");
} else {
  console.log("Where’s my sandwich Jonathan?!")
} 




var grade = "B";
switch(grade) {
  case "A":
    console.log('You got an A! Great job!');
    break;
  case "B":
    console.log('You got an B! Good job!');
    break;
  default:
    console.log('Try again next time!');
    break;
}


var students = [jessica, ariel, joe, beth];
  var i = 0;
  while (i < 4) {
    console.log(students[i]);
    i++;
  }

  // Will print out:
  // >jessica
  // >ariel
  // >joe
  // >beth



for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
}
 // Will print out:
  // >jessica
  // >ariel
  // >joe
  // >beth  


  var jackson = {
  bidness: “all of the”,
  squads: “best of the”,
  friends: “the most”
};
for (var thing in jackson) {
  console.log("that cool dude jackson has " + jackson[thing] + " " + thing);
}

// Will print out:
// that cool dude jackson has all of the bidness
// that cool dude jackson has best of the squads
// that cool dude jackson has the most friends




for (var key in objectName) {
  //execute code
  //objectName[key] will give you the value
}




