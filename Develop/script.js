// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
//   WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var passLength = 0
lowerCase = false
upperCase = false
numericCharacters = false
specialCharacters = false
while(passLength > 128 || passLength < 8){
  passLength = prompt("Enter the password Length!")
  if(passLength > 128 || passLength < 8){
    alert("Please enter a value between 8 and 128!")
  }
}
// big list => Contains all the other condition 
// for(var i = 0; i < 3; i++) => 
var bigList = []
while(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
  var lowerCase = confirm("Do you need lowercase letters in your password?")
  if(lowerCase){
    bigList.push('abcdefghijklmnopqrstuvwxyz'.split(''))
  }
  var upperCase = confirm("Do you need Uppercase letters in your password?")
  if(upperCase){
    bigList.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
  }
  var numericCharacters = confirm("Do you need numeric characters in your password?")
  if(numericCharacters){
    bigList.push('0123456789Z'.split(''))
  }
  var specialCharacters = confirm("Do you need special characters in your password?")
  if(specialCharacters){
    bigList.push('~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'.split(''))
  }
  
  if(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
    alert("Please select atleat one lowercase, uppercase, numeric and/or special characters.")
  }
}
var flattenedArray = bigList.flat(1)
// console.log(flattenedArray)
// console.log(bigList)
// console.log(bigList.length)
var randompassword = []
for(var i = 0; i <bigList.length; i++){
  randompassword.push(bigList[i][Math.floor(Math.random() * bigList[i].length)])
}
// console.log(randompassword)
// randomly generated n = passLength-bigList.length length array 0 <= array[n] <= bigList.passLength
var randoms = Array.from({length: passLength-bigList.length}, () => Math.floor(Math.random() * flattenedArray.length));

for(var i = 0; i<randoms.length; i++){
  randompassword.push(flattenedArray[randoms[i]])
}
 return randompassword.join('');
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
