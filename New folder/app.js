// var charachtor = "ABCDabcd2345@#$%";
// var generatingPass = "";

// for (var i = 0; i < 12; i++) {
//   var pass = charachtor[Math.floor(Math.random() * charachtor.length)];
//   generatingPass += pass;
// }
// document.write(generatingPass);

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*(/)_<=]{,+}[|;.>:'?-";
var numbers = "0123456789";

var smallAlpha = document.querySelectorAll("#smallCheckBox");
var capitalAlpha = document.querySelectorAll("#capitalCheckBox");
var specialChara = document.querySelectorAll("#specialCheckBox");
var number = document.querySelectorAll("#numberCheckBox");

function generatePass() {
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
  var numberValues = getCheckedValues(number);

  var pass = [];
  var generatePass = "";

  if (smallAlphaValues.length > 0) {
    pass.push(...lowercaseLetters);
  }
  if (capitalAlphaValues.length > 0) {
    pass.push(...uppercaseLetters);
  }
  if (specialCharaValues.length > 0) {
    pass.push(...specialCharacters);
  }
  if (numberValues.length > 0) {
    pass.push(...numbers);
  }

  for (var i = 0; i < 12; i++) {
    var getPass = pass[Math.floor(Math.random() * pass.length)];
    generatePass += getPass;
  }

  var displayPass = document.getElementById("displayPass");
  displayPass.value = generatePass;
  console.log("generated pass ==>", generatePass);
}
