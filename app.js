var inputDisplay = document.getElementById("inputDisplay"); // Display input
var passShowIcon = document.querySelector(".p-show"); // Password Show icon
var passHideIcon = document.querySelector(".p-hidden"); // Password Hide icon
var strongPass = document.querySelector(".strongPass"); // Strong Password Div
var weakPass = document.querySelector(".weakPass"); // Weak Password Div
var copyInput = document.querySelector(".copy"); // Copy input
var copiedInput = document.querySelector(".copied"); // Copied input
var rangeBar = document.querySelector("#rangeBar"); // Range Bar
var showRangebarValue = document.querySelector("#rangeDisplay"); // Show Range Bar Values
var capitalLetters = document.querySelector("#capitalLetters"); // Capital Letters Check Box
var smallLetters = document.querySelector("#smallLetters"); // Small Letters Check Box
var numbers = document.querySelector("#numbers"); // Numbers Check Box
var specialCharacters = document.querySelector("#specialCharacters"); // Special Characters Check Box
var generatePass = document.querySelector("#btn"); // Password Generator Button

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*(/)_<=]{,+}[|;.>:'?-";
var number0To9 = "0123456789";
