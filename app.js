// var paas = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
// var generatePass = "";
// for (i = 0; i < 12; i++) {
//   var pass = paas[Math.floor(Math.random() * paas.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

// var password = ["ABCD", "abcd", "!@#$"];
// var generatePass = "";
// for (i = 0; i < password.length; i++) {
//   var pass = password[Math.floor(Math.random() * password.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

// var smallAlphaCheckboxes = document.querySelectorAll("#inlineCheckbox1");
// var capitalAlphaCheckboxes = document.querySelectorAll("#inlineCheckbox2");
// var specialCharaCheckboxes = document.querySelectorAll("#inlineCheckbox3");
// var numberCheckboxes = document.querySelectorAll("#inlineCheckbox4");

// function getCheckedValues(checkboxes) {
//   var checkedValues = [];
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       checkedValues.push(checkboxes[i].value);
//     }
//   }
//   return checkedValues;
// }

var UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var SpecialCharacters = "!@#$%^&*(/)_<=]{,+}[|;.>:'?-";
// var Numbers = "0123456789";

var smallAlpha = document.querySelectorAll("#smallCheckBox");
var capitalAlpha = document.querySelectorAll("#capitalCheckBox");
var specialChara = document.querySelectorAll("#specialCheckBox");
// var number = document.querySelectorAll("#numberCheckBox");

function getCheckedValues(checkboxes) {
  var checkedValue = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValue.push(checkboxes[i].value);
    }
  }
  return checkedValue;
}

var smallAlphaValues = getCheckedValues(smallAlpha);
var capitalAlphaValues = getCheckedValues(capitalAlpha);
var specialCharaValues = getCheckedValues(specialChara);

console.log(smallAlphaValues, capitalAlphaValues, specialCharaValues);
// var numberValues = getCheckedValues(number);

// if (numberValues) {
//   pass.push(Numbers);
// }

function generatePass() {
  var pass = [];
  var generatePass = "";
  
  console.log(smallAlphaValues);
  if (smallAlphaValues.check) {
    pass.push(LowercaseLetters);
  }
  console.log(capitalAlphaValues);
  if (capitalAlphaValues.check) {
    pass.push(UppercaseLetters);
  }
  console.log(specialCharaValues);
  if (specialCharaValues) {
    pass.push(SpecialCharacters);
  }

  console.log("after push ==>", pass);

  for (i = 0; i < 6; i++) {
    var getPass = pass[Math.floor(Math.random() * pass.length)];
    generatePass += getPass;
  }

  var displayPass = document.getElementById("displayPass");
  displayPass.value = generatePass;
  console.log(generatePass);
}

// console.log("Small Alpha Values: " + smallAlphaValues);
// console.log("Capital Alpha Values: " + capitalAlphaValues);
// console.log("Special Character Values: " + specialCharaValues);
// console.log("Number Values: " + numberValues);
