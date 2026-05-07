let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value;
    let nota = parseFloat(document.getElementById("nota").value);

    if (!nombre || isNaN(nota) || nota < 0 || nota > 10) {
        alert("Ingrese los datos correctamente. (Nota entre 0 y 10)");
        return;
    }

    let estudiante = {
        nombre: nombre,
        nota: nota,
    };

    estudiantes.push(estudiante); 
    
    limpiarCampos();
    mostrarTodos();
}

function mostrarTodos() {
    renderTabla(estudiantes);
}

function mostrarAprobados() {
    let aprobados = estudiantes.filter(e => e.nota >= 6);
    renderTabla(aprobados);
}

function mostrarReprobados() {
    let reprobados = estudiantes.filter(e => e.nota < 6);
    renderTabla(reprobados);
}

function renderTabla(lista) {
    let tabla = document.getElementById("tabla-estudiantes");
    tabla.innerHTML = "";

    lista.map((est, index) => {
        let estado = est.nota >= 6 ? "Aprobado" : "Reprobado";
        let fila = `<tr>
            <td>${index + 1}</td>
            <td>${est.nombre}</td>
            <td>${est.nota}</td>
            <td>${estado}</td>
            <td><button onclick="eliminar(${index})">Eliminar</button></td>
        </tr>`;
        tabla.innerHTML += fila;
    });

    calcularPromedio(lista);
}


function eliminar(index) {
    estudiantes.splice(index, 1); 
    mostrarTodos();
}

function calcularPromedio(lista) {
    let elementoPromedio = document.getElementById("promedio");
    if (lista.length === 0) {
        elementoPromedio.innerText = "Promedio: 0";
        return;
    }
    let promedio = lista.reduce((acc, est) => acc + est.nota, 0) / lista.length;
    elementoPromedio.innerText = "Promedio: " + promedio.toFixed(2);
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";
}