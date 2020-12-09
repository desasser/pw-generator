// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//TODO: Pass pw to this function to write to screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//TODO: My Code
//TODO: Create a series of prompts to determine the nature of the password
//Length of password, 8<=x<=128; check pw length, ask again for fresh input if outside of bounds

var pwLength = 0;
while (pwLength < 8 || pwLength > 128) {
  pwLength = prompt("How long do you want your password to be?");
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password must be between 8 and 128 characters.")
  }
}

//Lowercase?
//Uppercase?
//Numeric?
//Special characters?

var typeCheck = false;
while (typeCheck === false) {
  var lowerCase = confirm("Do you want to include lowercase characters?");
  var upperCase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var spChar = confirm("Do you want to include special characters?");

  console.log(lowerCase, upperCase, numeric, spChar);

  //Check input to confirm that at least one character type should be selected
  if (lowerCase === false && lowerCase === false && numeric === false && spChar === false) {
    alert("You must chose at least one type of character.");
  } else {
    typeCheck = true;
  }
  console.log(typeCheck);
}

//TODO: Once all input is collected, generate a password using the selected criteria
var lowerCaseAlphabet = "abcdefghijlmnopqrstuvwxyz";
var upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();
var numericChars = "1234567890";
var spCharSet = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

console.log(spCharSet);
console.log(upperCaseAlphabet);
//TODO: Display password either on page or in an alert


//TODO: Finish up
//TODO: Check console devTools for errors
//TODO: Deploy
//TODO: Load clean
//TODO: GitHub URL submitted
//TODO: GitHub Repo with code submitted
//TODO: Readme