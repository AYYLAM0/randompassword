document.querySelector("#generate").addEventListener("click", createPassword)

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


//confirming lengtrh
function createPassword() {
  var characterLength = (prompt("How many characters does the password require?"));

  while (characterLength <= 8 || length >= 128) {
    alert("Password has to be between 8-128 characters");
    var characterLength = ("How many characters does the password require?")
  }
}


//confrirming requirements for password
var lowerRequired = confirm("Click Confirm if lowercases are required/desired");
var upperRequired = confirm("Click Confirm if uppercases are required/desired");
var symbolRequired = confirm("Click Confirm if special characters are required/desired");
var numberRequired = confirm("Click Confirm if numbers are required/desired");

while (lowerRequired === false && upperRequired === false && symbolRequired === false && numberRequired === false && symbolRequired === false) {
  alert("One of the options must be selcted to continue.")
  var lowerRequired = confirm("Click Confirm if lowercases are required/desired");
  var upperRequired = confirm("Click Confirm if uppercases are required/desired");
  var symbolRequired = confirm("Click Confirm if special characters are required/desired");
  var numberRequired = confirm("Click Confirm if numbers are required/desired");
}

//random generators for password
var passwordRequirements = []
if (lowerRequired) {
  function genLower() {
    return String.fromCharCode(math.floor(Math.random() * 26) + 97);
  }
}

if (upperRequired) {
  function genUpper() {
    return String.fromCharCode(math.floor(Math.random() * 26) + 65);
  }
}

if (numberRequired) {
  function genNumber() {
    return String.fromCharCode(math.floor(Math.random() * 10) + 48);
  }
}

if (symbolRequired) {
  function getsymbol() {
    const symbol = '!@#$%^&*<>()[]{}=.,/?'
    return String.fromCharCode(math.floor(Math.random() * symbols.length));
  }
}



console.log(symbolRequired)

console.log(createPassword)