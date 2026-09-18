var input = document.getElementById('nuevoElemento');
var botonAgregar = document.getElementById('agregarBoton');
var lista = document.getElementById('lista');

function agregarElemento() {
    var texto = input.value.trim(); 

    if (texto !== '') {
        var li = document.createElement('li');
        
        li.classList.add('elemento', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        
        var textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); 

        var botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm'); 
        
        botonEliminar.addEventListener('click', function() {
            li.remove(); 
        });

        li.appendChild(botonEliminar);
        
        lista.appendChild(li);

        input.value = '';
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);