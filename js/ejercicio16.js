const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion) {
    var inputNum1 = document.getElementById("numero1").value.trim();
    var inputNum2 = document.getElementById("numero2").value.trim();
    var txtResultado = document.getElementById("resultado");

    if (inputNum1 === "" || inputNum2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa un valor en ambos campos.'
        });
        return;
    }

    var num1 = Number(inputNum1);
    var num2 = Number(inputNum2);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Por favor, asegúrate de ingresar solo números.'
        });
        return;
    }

    var resultado;

    if (operacion === 'suma') {
        resultado = sumar(num1, num2);
    } else if (operacion === 'resta') {
        resultado = restar(num1, num2);
    } else if (operacion === 'multiplicacion') {
        resultado = multiplicar(num1, num2);
    } else if (operacion === 'division') {
        resultado = dividir(num1, num2);
    }
    
    txtResultado.value = resultado;
}