var formulario = document.getElementById('formulario');
var pesos = document.getElementById('pesos');
var resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    var valorPesos = Number(pesos.value);

    if (pesos.value === '' || isNaN(valorPesos) || valorPesos < 0) {
        resultado.value = 'Ingrese una cantidad válida';
        return;
    }

    resultado.value = (valorPesos * 0.058) + " Dolares (USD)";
});
