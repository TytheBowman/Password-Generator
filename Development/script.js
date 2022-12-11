function generatePassword() {
  // Prompt the user for password criteria
  var passwordLength = prompt("Enter the desired length of your password (8-128 characters):");
  var includeLowercase = confirm("Include lowercase characters in the password?");
  var includeUppercase = confirm("Include uppercase characters in the password?");
  var includeNumeric = confirm("Include numeric characters in the password?");
  var includeSpecial = confirm("Include special characters in the password?");

  // Validate user input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error: Password length must be between 8 and 128 characters.");
    return;
  }
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Error: At least one character type must be selected.");
    return;
  }

  // Generate the password
  var password = "";
  var characterTypes = "";
  if (includeLowercase) characterTypes += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characterTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) characterTypes += "0123456789";
  if (includeSpecial) characterTypes += "!@#$%^&*()";

  for (var i = 0; i < passwordLength; i++) {
    password += characterTypes.charAt(Math.floor(Math.random() * characterTypes.length));
  }

  // Display the password
  var passwordText = document.getElementById("password");
  passwordText.innerHTML = password;
}
