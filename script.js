/* INSTRUCTIONS */
// Complete Tasks 1, 2, and 3 below.
// There is also an Extra Credit challenge!
// You will be modifying the variable `groceryList`, but DO NOT edit the line of code below!

// DO NOT CHANGE THE LINE OF CODE BELOW!!!
var groceryList = ["milk","eggs","bread"];
// DO NOT CHANGE THE LIND OF CODE ABOVE!!!

function addItem() { // runs when the user presses 'a'
  // TASK 1: Write code that allows the user to add an item to the end of the list.
  // write your code BELOW this line
  var newItem = prompt("What would like to add to the list"); 
  groceryList.push(newItem);

  // write your code ABOVE this line
}

function deleteLastItem() { // runs when the user presses 'd'
  // TASK 2: Write code that allows the user to delete the last item from the list. Also alert the user "Removing: ___".
  // write your code BELOW this line
  var lastItem = prompt("Removing last item");
  groceryList.pop(lastItem);
  // write your code ABOVE this line
}

function changeSpecificItem() { // runs when the user presses 'c'
  // TASK 3: Write code that allows the user to change a specific item on the list. The first question should be "Which item do you want to change?" and for example, if the answer is 1, it should change the first item on the list. The second question should be "What would you like to change it to?".
  // write your code BELOW this line
 var intialSpecificItem = prompt("Which item do you want to change (use a munber)");
 //console.log(asking number)
 var changeSpecificItem = prompt("What would like change it to?" )
  groceryList[intialSpecificItem - 1] = changeSpecificItem;
 // var changeItem = groceryList.s hift();
  
  // write your code ABOVE this line
}

function removeSpecificItem() { // runs when the user presses 'r'
  // EXTRA CREDIT: Write code that allows the user to remove a specific item on the list. For example, if the answer is 2, it should remove the second item on the list. HINT: this requires using Google, as this concept has not been taught yet.
  // write your code BELOW this line
var specificItem = prompt("Which item would you like to remove? (Use a number)");
varName.splice(vaule you wanted, how much you want to delete);
groceryList[intialSpecificItem-1] = groceryList.pop();

  // write your code ABOVE this line
}

/* DO NOT EDIT ANYTHING BELOW!!! */

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  fill(100);
  rect(30,50,275,300)
  fill(255);
  textSize(30);
  text("Grocery List App",55,100);
  textSize(12);
  text("Use the following letters to change your list!",50,150);
  textSize(15);
  text("a = add item to the end of the list",40,200);
  text("d = delete last item in the list",40,225);
  text("c = change an item on the list",40,250);
  text("r = remove a specific item from the list",40,275);
  
  textSize(20);
  fill(255);
  for(var i = 0; i < groceryList.length; i++){
    text(i+1 + ". " + groceryList[i],350,i*30+75);
  }
  
}

function keyPressed() {
  if(key.toLowerCase() == 'a') {
    addItem();
  } else if(key.toLowerCase() == 'd') {
    deleteLastItem();
  } else if(key.toLowerCase() == 'c') {
    changeSpecificItem();
  } else if(key.toLowerCase() == 'r') {
    removeSpecificItem();
  }
}