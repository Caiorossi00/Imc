let ageInput = document.getElementById("age");
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let genderInput = document.getElementById("gender");

function calcularImc() {
  let age = parseFloat(ageInput.value);
  let heightInCentimeters = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);
  let gender = genderInput.value;

  if (
    isNaN(age) ||
    isNaN(heightInCentimeters) ||
    isNaN(weight) ||
    age < 0 ||
    heightInCentimeters < 0 ||
    weight < 0
  ) {
    alert(
      "Por favor, insira valores válidos e não negativos para idade, altura e peso."
    );
    return null;
  }

  let heightInMeters = heightInCentimeters / 100;

  let imc;

  if (gender === "male") {
    imc = weight / (heightInMeters * heightInMeters);
  } else if (gender === "female") {
    imc = weight / (heightInMeters * heightInMeters);
  }

  displayInfos(imc);
  return imc;
}

function displayInfos(imcTotal) {
  let infos = document.querySelector("#infos");

  if (imcTotal !== null) {
    let roundedIMC = Math.round(imcTotal * 100) / 100;

    let formattedIMC = roundedIMC.toFixed(2);

    let message = "";

    if (roundedIMC < 18.5) {
      message = "Magreza";
    } else if (roundedIMC >= 18.5 && roundedIMC <= 24.9) {
      message = "Normal";
    } else if (roundedIMC >= 25.0 && roundedIMC <= 29.9) {
      message = "Sobrepeso (I)";
    } else if (roundedIMC >= 30.0 && roundedIMC <= 39.9) {
      message = "Obesidade (II)";
    } else {
      message = "Obesidade Grave (III)";
    }

    infos.innerHTML = `O seu IMC é de: ${formattedIMC}<br>Categoria: ${message}`;
  } else {
    infos.innerHTML = "Gênero não reconhecido.";
  }
}
