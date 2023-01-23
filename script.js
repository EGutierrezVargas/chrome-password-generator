const rangePassword = document.getElementById("range");
const generatePassword = document.getElementById("generate");

const wordsGroup = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

rangePassword.onchange = function (e) {
  const valueOfRange = e.target.value;
  const rangeNumber = document.getElementById("rangeNumber");
  rangeNumber.innerHTML = valueOfRange;
};

generatePassword.onclick = function () {
  let length = rangePassword.value;
  let password = "";
  let characters = "";
  //Get all checked checkboxes
  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");

  //Add all checked checkboxes to characters
  if (checkedBoxes.length > 0) {
    checkedBoxes.forEach((checkbox) => {
      console.log(checkbox.name);
      characters += wordsGroup[checkbox.name];
    });
    //Randomize password

    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    document.getElementById("password").value = password;
    document.getElementById("password").innerHTML = password;
    characters = "";
  } else {
    const strWords = Object.values(wordsGroup).join("");
    for (let i = 0; i < length; i++) {
      password += strWords.charAt(Math.floor(Math.random() * strWords.length));
    }
    document.getElementById("password").value = password;
    document.getElementById("password").innerHTML = password;
    characters = "";
  }
};
