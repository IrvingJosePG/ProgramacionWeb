var estudiantes = [];

var inputNombre = document.getElementById("nombre");
var inputCalificacion = document.getElementById("calificacion");
var btnAgregar = document.getElementById("botonAgregar");
var btnCalcular = document.getElementById("botonCalcular");

var txtPromedio = document.getElementById("promedio");
var txtMejor = document.getElementById("mejorEstudiante");
var txtPeor = document.getElementById("peorEstudiante");

btnAgregar.addEventListener("click", function() {
    var nombre = inputNombre.value.trim();
    var calificacionTexto = inputCalificacion.value.trim();

    if (nombre === "" || calificacionTexto === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }
    
    var calificacion = Number(calificacionTexto);
    if (isNaN(calificacion)) {
        alert("Asegúrate de que la calificación sea un número válido.");
        return;
    }

    var nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(nuevoEstudiante);

    inputNombre.value = "";
    inputCalificacion.value = "";
    alert("Estudiante agregado correctamente.");
});


btnCalcular.addEventListener("click", function() {
    if (estudiantes.length === 0) {
        alert("Debes agregar al menos un estudiante antes de calcular.");
        return;
    }

    var promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;

    var calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    var calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    var nombreMaximo = "";
    var nombreMinimo = "";

    estudiantes.forEach(estudiante => {
        if (estudiante.calificacion === calificacionMaxima) {
            nombreMaximo = estudiante.nombre;
        }
        if (estudiante.calificacion === calificacionMinima) {
            nombreMinimo = estudiante.nombre;
        }
    });

    txtPromedio.value = promedio;
    txtMejor.value = nombreMaximo;
    txtPeor.value = nombreMinimo;
});