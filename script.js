// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password Function
function generatePassword() {
// prompt for the length of the password
let passwordLength = prompt("Choose a length of at least 8 characters and no more than 128 characters.");
if (passwordLength >= 8 && passwordLength <= 128) {
  alert("Great choice!")
} else {
  window.alert("Not a valid length!");
  return;
}

// declare arrays and objects for password character choices
var characterTypes = ["lowercase", "uppercase", "numeric", "special"];
var characterArrays = [];
var characterSets = {
  0: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  1: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  2: ['1','2','3','4','5','6','7','8','9','0'],
  3: ['!','@','#','$','%','^','&','*']
}

// ask for character types to include in the password
var set = 0;
var atLeastOne = 0;
for (var x = 0; x < characterTypes.length; x++) {
  let selectType = confirm("Would you like " + characterTypes[x] + " characters to be part of your password?");
  if (selectType) {
    characterArrays[set] = characterSets[x];
    set++
    atLeastOne++
  }
}

if (!atLeastOne > 0) {
  alert("No character types chosen, lowercase and numeric were set by default.");
  characterArrays[0] = characterSets[0];
  characterArrays[2] = characterSets[2];
}

console.log(characterTypes);

// build random password with for loop and Math.random
var password = "";
for (var x = 0; x < passwordLength; x++) {
  var randomCharacterSet = characterArrays[Math.floor(Math.random() * characterArrays.length)];
  var randomcharacter = randomCharacterSet[Math.floor(Math.random() * randomCharacterSet.length)];
  password = password + randomcharacter;
}
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
