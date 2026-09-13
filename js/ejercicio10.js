var formulario = document.getElementById("formulario");
var grados = document.getElementById("grados");
var resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    var celsius = grados.value;

    if (celsius === "") {
        alert("Por favor, ingresa una temperatura en grados Celsius.");
        return;
    }

    var fahrenheit = (celsius * 9 / 5) + 32;

    resultado.value = fahrenheit + "°F";
});