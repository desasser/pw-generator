// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Create a series of prompts to determine the nature of the password
function generatePassword() {
//Var declaration
let pwLength = 0;
let typeCheck = false;
const lowerCaseAlphabet = "abcdefghijlmnopqrstuvwxyz";
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();
const numericChars = "1234567890";
const spCharSet = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
let types = [lowerCase, upperCase, numeric, spChar];
const chars = [lowerCaseAlphabet, upperCaseAlphabet, numericChars, spCharSet];
let totalTypes = [];
let randomPw ="";

//Length of password, 8<=x<=128; check pw length, ask again for fresh input if outside of bounds
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


while (typeCheck === false) {
  var lowerCase = confirm("Do you want to include lowercase characters?");
  var upperCase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var spChar = confirm("Do you want to include special characters?");



  //Check input to confirm that at least one character type should be selected
  if (lowerCase === false && upperCase === false && numeric === false && spChar === false) {
    alert("You must chose at least one type of character.");
  } else {
    typeCheck = true;
  }

}
types = [lowerCase, upperCase, numeric, spChar];
//Once all input is collected, generate a password using the selected criteria



//Check which types are used, then concatenate string of available letters

for (let i = 0; i < types.length; i++) {
  if (types[i]) {
    totalTypes = totalTypes + chars[i];
  }
}

// edge case - protect against bad luck of all one type of char


//Randomly generate password of user input length from total set of characters

for (let i = 0; i < pwLength; i++) {
  const randomPwChar = totalTypes[Math.floor(Math.random() * totalTypes.length)];
  randomPw += randomPwChar; 
}




//Display password on page
return randomPw;
}
//Finish up
//Check console devTools for errors
//Deploy
//Load clean
//GitHub URL submitted
//GitHub Repo with code submitted
//Readme