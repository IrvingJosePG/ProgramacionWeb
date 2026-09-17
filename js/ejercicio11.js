var formulario = document.getElementById('formulario');
var kilometros = document.getElementById('kilometros');
var resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    var valorKilometros = Number(kilometros.value);

    if (kilometros.value === '' || isNaN(valorKilometros) || valorKilometros < 0) {
        resultado.value = 'Ingrese una cantidad válida';
        return;
    }

    resultado.value = (valorKilometros * 0.621371) + " Millas";
});