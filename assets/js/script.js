var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");


// Generate password 


function writePassword() {
  let charLength = prompt("Password length between 8-128 characters?")
  let charLower = confirm("Include lowercase?")
  let charUpper = confirm("Include uppercase?");
  let charNum = confirm("Include numbers?");
  let charSpec = confirm("Include symbols?");
  let passVar = ""
  let password = ""
  
  
  
  // Validity check on variables
  if(isNaN (parseInt(charLength))) {
    alert("Please input a number between 8 and 128");
    return;
    }
  if(parseInt(charLength) < 8 || parseInt(charLength) > 128) {
    alert("Your password is either too short or long. Please keep your password between 8-16 characters in length.");
    return;
    }
    
  if(charLower === true) {
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    passVar += lowerCaseLetters
    }
  if(charUpper === true) {
     var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     passVar += upperCaseLetters
     }
  if(charNum === true) {
    var numbersTrue = "1234567890"
    passVar += numbersTrue
    }
  if(charSpec === true) {
    var symbolsTrue = '"~!@#$%^&*()_+{}|-="'
    passVar += symbolsTrue
    }




// Loop through password variables.
for (var i = 0; i < charLength; i++) {
  var randomNumber = Math.floor(Math.random() * passVar.length);
  password += passVar.substring(randomNumber, randomNumber +1);
 }
 
       document.getElementById("password").value = password;
       
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);