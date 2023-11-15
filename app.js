var inputDisplay = document.getElementById("inputDisplay"); // Display input

var clipBoard = document.querySelector("#clipBoard"); // Weak Password Div
var copyInput = document.querySelector(".copy"); // Copy input
var copiedInput = document.querySelector(".copied"); // Copied input
var generatePassBtn = document.querySelector("#btn"); // Password Generator Button

// Show & Hide Password
var passShowIcon = document.querySelector(".p-show"); // Password Show icon
var passHideIcon = document.querySelector(".p-hidden"); // Password Hide icon
var showPassword = document.querySelector(".passIcon"); // Password Hide icon
showPassword.addEventListener("click", () => {
  if (inputDisplay.type === "password") {
    inputDisplay.type = "text";
    passHideIcon.style.display = "none";
    passShowIcon.style.display = "block";
  } else {
    inputDisplay.type = "password";
    passHideIcon.style.display = "block";
    passShowIcon.style.display = "none";
  }
});

// Getting & Showing Input Range
var rangeBar = document.querySelector("#rangeBar"); // Range Bar
var showRangebarValue = document.querySelector("#rangeDisplay"); // Show Range Bar Values
rangeBar.addEventListener("change", () => {
  if (rangeBar.value < 10) {
    showRangebarValue.innerHTML = 0 + rangeBar.value;
  } else {
    showRangebarValue.innerHTML = rangeBar.value;
  }
});

// Copy ClipBoard
clipBoard.addEventListener("click", () => {
  if (inputDisplay.value == "") {
    copyInput.disabled;
    copyInput.style.cursor = "not-allowed";
  } else {
    inputDisplay.select();
    document.execCommand("copy");
    copiedInput.style.display = "block";
    copyInput.style.display = "none";
    copyInput.style.hover ="unset"
  }
});

// Checking If Check Box Checked

function generatePass() {
  copiedInput.style.display = "none";
  copyInput.style.display = "block";

  var capitalLetters = document.querySelector("#capitalLetters"); // Capital Letters Check Box
  var smallLetters = document.querySelector("#smallLetters"); // Small Letters Check Box
  var numbers = document.querySelector("#numbers"); // Numbers Check Box
  var specialCharacterCheckbox = document.querySelector("#specialCharacters"); // Special Characters Check Box

  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*(/)_<=]{,+}[|;.>:'?-";
  var number0To9 = "0123456789";

  function getCheckedValues(checkboxes) {
    var checkedValue = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedValue.push(checkboxes[i].value);
      }
    }
    return checkedValue;
  }

  var capitalLettersChecked = getCheckedValues([capitalLetters]);
  var smallLettersChecked = getCheckedValues([smallLetters]);
  var numbersChecked = getCheckedValues([numbers]);
  var specialCharactersChecked = getCheckedValues([specialCharacterCheckbox]);

  var pass = [];

  if (capitalLettersChecked.length > 0) {
    pass.push(...uppercaseLetters);
  }
  if (smallLettersChecked.length > 0) {
    pass.push(...lowercaseLetters);
  }
  if (numbersChecked.length > 0) {
    pass.push(...number0To9);
  }
  if (specialCharactersChecked.length > 0) {
    pass.push(...specialCharacters);
  }
  var generatePassword = "";

  for (var i = 0; i < rangeBar.value; i++) {
    var getPass = pass[Math.floor(Math.random() * pass.length)];
    generatePassword += getPass;
  }
  var strongPass = document.querySelector(".strongPass"); // Strong Password Div
  var weakPass = document.querySelector(".weakPass"); // Weak Password Div

  if (generatePassword.length >= 12) {
    weakPass.style.display = "none";
    strongPass.style.display = "block";
  } else {
    weakPass.style.display = "block";
    strongPass.style.display = "none";
  }

  inputDisplay.value = generatePassword;
  console.log("generated pass ==>", generatePassword);
}
