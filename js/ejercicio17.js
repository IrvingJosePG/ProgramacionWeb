var manejarTareas = (function() {
    function obtenerTareas() {
        let tareasGuardadas = localStorage.getItem("tareas");
        if (tareasGuardadas) {
            return JSON.parse(tareasGuardadas);
        } else {
            return [];
        }
    }

    function agregarTarea(tareaTexto) {
        let tareas = obtenerTareas(); 
        tareas.push({ tarea: tareaTexto, completada: false }); 
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function eliminarTarea(index) {
        let tareas = obtenerTareas(); 
        tareas.splice(index, 1);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    return {
        agregar: function(tareaTexto) {
            agregarTarea(tareaTexto);
        },
        eliminar: function(index) {
            eliminarTarea(index);
        },
        obtener: function() {
            return obtenerTareas();
        }
    };
})();


function renderizarTareas() {
    var contenedorLista = document.getElementById("listaTareas");
    contenedorLista.innerHTML = ""; 

    var tareas = manejarTareas.obtener();

    tareas.forEach(function(item, index) {
        var divTarea = document.createElement("div");
        divTarea.style = "display: flex; justify-content: space-between; align-items: center; border: 1px solid #E9ECEF; padding: 12px; border-radius: 8px; margin-bottom: 10px; background-color: #F8F8FA;";
        
        var spanTexto = document.createElement("span");
        spanTexto.textContent = item.tarea;

        var btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "boton-enviar";
        btnEliminar.style = "background-color: #e63946; padding: 8px 16px; width: auto; font-size: 14px;";
        
        btnEliminar.addEventListener("click", function() {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: "No podrás revertir esto.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e63946',
                cancelButtonColor: '#927dc1',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    manejarTareas.eliminar(index);
                    renderizarTareas();
                    Swal.fire('Eliminada', 'La tarea se eliminó correctamente.', 'success');
                }
            });
        });

        divTarea.appendChild(spanTexto);
        divTarea.appendChild(btnEliminar);
        contenedorLista.appendChild(divTarea);
    });
}


var btnAgregar = document.getElementById("botonAgregarTarea");
var inputTarea = document.getElementById("inputTarea");

btnAgregar.addEventListener("click", function() {
    var texto = inputTarea.value.trim();
    
    if (texto === "") {
        Swal.fire('Error', 'Por favor, ingresa una tarea válida.', 'error');
        return;
    }
    
    manejarTareas.agregar(texto); 
    inputTarea.value = ""; 
    renderizarTareas(); 
});

window.onload = function() {
    renderizarTareas();
};