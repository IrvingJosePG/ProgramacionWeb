var formulario = document.getElementById("formulario");
var inputnumeros = document.getElementById("entradaNumeros");
var numMayor = document.getElementById("numMayor");
var numMenor = document.getElementById("numMenor");
var numPromedio = document.getElementById("numPromedio");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    var cadena = inputnumeros.value.trim();

    if (cadena === "") {
        alert("Por favor, ingresa una lista de números.");
        return;
    }

    var partes = cadena.split(",");
    var numeros = partes.map(function(parte) {
        return parte.trim();
    });

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] === "" || isNaN(Number(numeros[i]))) {
            alert("Por favor, asegúrate de ingresar solo números válidos separados por comas.");
            return;
        }
        numeros[i] = Number(numeros[i]);
    }

    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);

    var suma = numeros.reduce(function(acc, valor) {
        return acc + valor;
    }, 0);
    var promedio = suma / numeros.length;

    numMayor.value = mayor;
    numMenor.value = menor;
    numPromedio.value = promedio;
});