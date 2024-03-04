/*
PSEUDOCODE:
-create a string to inform the user they are getting a combination
-Declare each variable needed for the combination
-A safe combination will usually not change, (nor will our message to the user) so use const.
-use three different math operators
-comment each step
-make an element in your html for printing the combo number to
-use alert to make a pop-up dialog box
*/



//here is our message displayed in the alert:
const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"


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


//Here, we grab the h2 element by its ID:
let answerDisplay = document.getElementById("answer")
// And then render it to the DOM with .innerText
//Here we use a string template literal:
answerDisplay.innerText = `${comboOne}-${comboTwo}-${comboThree}`
// This alert demonstates string concatenation
alert(userMessage + " " + comboOne + "-" + comboTwo + " " + comboThree)