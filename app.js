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

var UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var SpecialCharacters = "!@#$%^&*(/)_<=]{,+}[|;.>:'?-";
var Numbers = "0123456789";

var smallAlpha = document.querySelectorAll("#inlineCheckbox1");
var capitalAlpha = document.querySelectorAll("#inlineCheckbox2");
var specialChara = document.querySelectorAll("#inlineCheckbox3");
var number = document.querySelectorAll("#inlineCheckbox4");

function getCheckedValues(checkboxes) {
  var checkedValue = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValue.push(checkboxes[i].value);
    }
  }
  return checkedValue;
}

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

var smallAlphaValues = getCheckedValues(smallAlphaCheckboxes);
var capitalAlphaValues = getCheckedValues(capitalAlphaCheckboxes);
var specialCharaValues = getCheckedValues(specialCharaCheckboxes);
var numberValues = getCheckedValues(numberCheckboxes);

console.log("Small Alpha Values: " + smallAlphaValues);
console.log("Capital Alpha Values: " + capitalAlphaValues);
console.log("Special Character Values: " + specialCharaValues);
console.log("Number Values: " + numberValues);
