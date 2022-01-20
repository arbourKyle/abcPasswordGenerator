//PSEUDO TODO:
//Make a prompt on click event for the first user input

//Prompt 1: Length of password 8 - 16 characters

//Prompt 2: Ask if to include lowerCase?

//Prompt 3: Ask if to include upperCase?

//Prompt 4: Ask if to include numbers?

//Prompt 5: Ask if to include special characters?

//TODO:
//When user gives input, evaluate the input for:
  //boolean: is the input valid? error message or continue to next step?
  //selection: a random generation of requested values
  //value change: update an empty object with each generated values

//Concat or stringify: 5 key-value pairs can be summed and displayed as password

//Display into card-body with password ID

/* let charLength = prompt("Choose password length between 8 and 16");
let charLower = prompt("Include lowercase?");
let charUpper = prompt("Include uppercase?");
let charNum = prompt("Include numbers?");
let charSpec = prompt("Include special characters?"); */





// Assignment Code
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

/* let chars = {

charUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
charLower: "abcdefghijklmnopqrstuvwxyz",
charNum: "0123456789",
charSpec: "!@#$%^&*()"

};

function charValue(char) {

  Object.values(chars);
  return chars = char;

}

let char = charValue(); */




// var passwordLength = "";
var password = "";
// var char = "";

/* if(prompt("Include uppercase?") == "yes" || "y") {
  char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

else if(prompt("Include lowercase?") == "yes" || "y") {
  char = "abcdefghijklmnopqrstuvwxyz";
}

else if(prompt("Include numbers?") == "yes" || "y") {
  char = "0123456789";
}
else if(prompt("Include numbers?") == "yes" || "y") {
  char = "!@#$%^&*()";
}
else
{
  return;
} */

let passwordLength = prompt("Please enter password length between 8-16 characters");


//function in a function messy and no working

/* function upper() {
  prompt("include uppercase?");
  char += prompt.value;
}

upper(); */


//set var initial to +1 because the result was always one more than the user input, starting at +1 reduces the index by 1, thereby subtracting one

for (var i = +1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
   }
/* 
   for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charLower.length);
    password += charLower.substring(randomNumber, randomNumber +1);
   }
   for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charNum.length);
    password += charNum.substring(randomNumber, randomNumber +1);
   }
   for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * charSpec.length);
    password += charSpec.substring(randomNumber, randomNumber +1);
   } */
      
   
   document.getElementById("password").value = password;
      
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
