var inputDisplay = document.getElementById("inputDisplay"); // Display input

var clipBoard = document.querySelector("#clipBoard"); // Weak Password Div
var copyInput = document.querySelector(".copy"); // Copy input
var copiedInput = document.querySelector(".copied"); // Copied input
var generatePassBtn = document.querySelector("#btn"); // Password Generator Button

// Demo Driver-JS

var demo = document.getElementById("demo");

const driver = window.driver.js.driver;

const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: ".display",
      popover: {
        title: "Display",
        description: "Generated Passowrd Field",
      },
    },
    {
      element: ".p-show",
      popover: {
        title: "Show & Hide",
        description: "You can hide your generated password by clicking this",
      },
    },
    {
      element: ".copy",
      popover: {
        title: "Copy to clipboard",
        description: "Copy your generated password",
      },
    },
    {
      element: "#rangeBar",
      popover: {
        title: "Set range of password",
        description: "Set the range of password by using scroll",
      },
    },
    {
      element: "#rangeValueDiv",
      popover: {
        title: "Character Length",
        description: "You can see your password length here",
      },
    },
    {
      element: ".checkboxes",
      popover: {
        title: "Choose Character",
        description: "Check box for choosing password characters",
      },
    },
    {
      element: "#btn",
      popover: {
        title: "Generate Password",
        description: "Generate your password",
      },
    },
  ],
});

demo.addEventListener("click", () => {
  driverObj.drive();
});

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
var empty = document.querySelector(".empty").style;
clipBoard.addEventListener("click", () => {
  if (inputDisplay.value == "") {
    empty.display = "block";
    weakPass.style.display = "none";
    strongPass.style.display = "none";
  } else {
    empty.display = "none";
    inputDisplay.select();
    document.execCommand("copy");
    copiedInput.style.display = "block";
    copyInput.style.display = "none";
  }
});

// Checking If Check Box Checked
var strongPass = document.querySelector(".strongPass"); // Strong Password Div
var weakPass = document.querySelector(".weakPass"); // Weak Password Div

function generatePass() {
  empty.display = "none";
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

  if (
    generatePassword.length >= 8 &&
    capitalLettersChecked.length > 0 &&
    smallLettersChecked.length > 0 &&
    numbersChecked.length > 0 &&
    specialCharactersChecked.length > 0
  ) {
    weakPass.style.display = "none";
    strongPass.style.display = "block";
  } else {
    weakPass.style.display = "block";
    strongPass.style.display = "none";
  }

  inputDisplay.value = generatePassword;
  console.log("generated pass ==>", generatePassword);
}
