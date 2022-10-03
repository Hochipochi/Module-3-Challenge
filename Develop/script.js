var passwordText = document.querySelector("#password");
// When page loads, empty text in password box
passwordText.text = ""

var possibleCharacters = ""
var guaranteedCharacters = ""
//push 1 characters from each true statement into guaranteed

// Array of special characters to be included in password
var specialCharacters = "!@#$%^&*()_+-=";

// Array of numeric characters to be included in password
var numericCharacters = "0123456789";

// Array of lowercase characters to be included in password
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwyxz";

// Array of uppercase characters to be included in password
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    getPasswordOptions();
  }

  // // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    getPasswordOptions();
  } else if (length > 128) {
    alert('Password length must be less than 128 characters');
    getPasswordOptions();
  }

  // // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false

  // // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including Numeric characters.'
    )
  // // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including Lowercase characters.'
      )

  // // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including Lowercase characters.'
  )  

  // // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters,
  };
// console.log(passwordOptions)
// console.log(passwordOptions["length"])
// console.log(passwordOptions.length)
// console.log(passwordOptions, "getPasswordOptions Function")
  generatePassword(passwordOptions);
}
// Move if statements to prompt area if not working in generatePassword function
// Using bracket and dot syntax for practice
function generatePassword(tempVariable) {
  // console.log(tempVariable, "generatePassword Function")
  if (tempVariable["hasSpecialCharacters"] === true) {
    possibleCharacters += specialCharacters;
  } if (tempVariable["hasNumericCharacters"] === true) {
    possibleCharacters += numericCharacters;
  } if (tempVariable.hasLowercaseCharacters === true) {
    possibleCharacters += lowerCasedCharacters;
  } if (tempVariable.hasUppercaseCharacters === true) {
    possibleCharacters += upperCasedCharacters;
  }
  // Loop using length of password to find number of characters from possible
  // line 98 generates random character based on max length, then adds random character to guaranteedCharacters for generated password
  for (var i = 0; i < tempVariable.length; i++) {
    guaranteedCharacters += possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]
  }
  //Last step, write password to page
  writePassword();
}

function writePassword() {
  passwordText.value = guaranteedCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);