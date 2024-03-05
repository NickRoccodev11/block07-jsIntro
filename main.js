/*
PSEUDOCODE:
-create a string to inform the user they are getting a combination
-Declare each variable needed for the combination
-A safe combination will usually not change, (nor will our message to the user) so use const.
-use three different math operators when assigning the combo variables
-comment each step
-make an element in your html for printing the combo number to
-use alert to make a pop-up dialog box
*/



//here is our message displayed in the alert:
const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";


//Here I use the previously assigned variable
// as part of the operation
const comboOne = 100 / 10;
const comboTwo = comboOne * 4;
const comboThree = comboTwo - 1;

//Alternatively, you could declare them this way:
/*
const comboOne = 100 / 10;
const comboTwo = 2 * 20
const comboThree = 40 - 1;
*/


//Here, we grab the h2 element by its ID...
let answerDisplay = document.getElementById("answer");

// ...And then render it to the DOM with .innerText
//Here we use a string template literal:
answerDisplay.innerText = `${comboOne}-${comboTwo}-${comboThree}`;

// This alert demonstates string concatenation
alert(userMessage + " " + comboOne + "-" + comboTwo + "-" + comboThree);

//STRETCH
const safe = document.getElementById("safe")
const userComboOne = prompt("what is the first number of the combination", "");

const userComboTwo = prompt("what is the second number of the combination", "");

const userComboThree = prompt("what is the third number of the combination", "");

if (userComboOne == comboOne &&
  userComboTwo == comboTwo &&
  userComboThree == comboThree) {
  alert('nicely done, here are the jewels');
} else {
  alert("Incorrect Entry: Alarm has been triggered!");
  const comboHeader = document.getElementById("combo-header");
  comboHeader.innerText = "";
  answerDisplay.innerText = "";
  safe.src = 'alarm.webp';
  document.body.classList.add("alarm-triggered");
}
safe.style.display = "block";