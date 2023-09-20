const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "/*-+=!$#@%?&()";

function generatePassword() {
  let data = [ ];
  let password = " ";
  if(lowercase.checked) data.push(...dataLowercase);
  if(uppercase.checked) data.push(...dataUppercase);
  if(numbers.checked) data.push(...dataNumbers);
  if(symbols.checked) data.push(...dataSymbols);

  if(data.lenght === 0){
    alert("Veuillez sélectionner des critères");
    return;
  }

  for(i=0; i < passwordLenght.value; i++){
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié !";
  setTimeout(() =>{
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
};

generateButton.addEventListener("click", generatePassword);