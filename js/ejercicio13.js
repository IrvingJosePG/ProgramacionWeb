var formulario = document.getElementById('formulario');
var edad = document.getElementById('edad');
var resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    var valoredad = Number(edad.value);

    if (edad.value === '' || isNaN(valoredad) || valoredad < 0 || valoredad > 100) {
        resultado.value = 'Ingrese una edad válida';
        return;
    }

    if(valoredad >= 18){
        resultado.value = "Es mayor de edad, tiene permitido votar";
    } else {
        resultado.value = "Es menor de edad, no tiene permitido votar";
    }
});


