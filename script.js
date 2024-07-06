const resultado = document.querySelector("#resultado");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

const calcIMC = () => {
    if (altura.value !== "" && peso.value !== "" && parseFloat(altura.value) !== 0 && parseFloat(peso.value) !== 0) {
        const imc = (peso.value / (altura.value ** 2)).toFixed(2);
        let classification = "";

        if (imc < 18.5) {
            classification = "Abaixo do peso";
        } else if (imc < 25) {
            classification = "Peso normal";
        } else if (imc < 30) {
            classification = "Sobrepeso";
        } else if (imc < 40) {
            classification = "Obesidade";
        } else {
            classification = "Obesidade 2";
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`;
    } else {
        resultado.innerHTML = "Preencha os campos";
    }
}
