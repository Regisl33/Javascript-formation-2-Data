const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const progessBar = document.getElementById("progress-bar");
const form = document.querySelector("form");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = " ";
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", " ", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", " ", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  progessBar.classList = " ";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractères spécial"
    );
    progessBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", " ", true);
    progessBar.classList.add("progressBlue");
    password = value;
  } else {
    errorDisplay("password", " ", true);
    progessBar.classList.add("progressGreen");
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe doivent etre identique");
    confirmPass = false;
  } else {
    errorDisplay("confirm", " ", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass) {
    let data = {
      pseudo,
      email,
      password,
    };
    console.log(data);

    progessBar.classList = " ";
    inputs.forEach((input) => {
      input.value = "";
    });

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validé!");
  } else {
    alert("Veuillez remplir tous les champs");
  }
});
