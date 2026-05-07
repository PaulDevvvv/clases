let listaProductos = [];


function agregarProducto() {
    let nombre = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let identificacion = document.getElementById("identificacion").value;

    if (nombre === "" || precio === "" || identificacion === "") {
        alert("Por favor, ingrese todos los datos correctamente.");
        return;
    }

    let nuevoProducto = {
        nombre: nombre,
        precio: parseFloat(precio).toFixed(2),
        id: identificacion
    };

    listaProductos.push(nuevoProducto);

    limpiarCampos();
    renderTabla();
}


function renderTabla() {
    let tabla = document.getElementById("tabla-productos");
    tabla.innerHTML = "";


    listaProductos.map((pro, index) => {
        let fila = `
            <tr>
                <td>${pro.nombre}</td>
                <td>$${pro.precio}</td>
                <td>${pro.id}</td>
                
            </tr>`;
        tabla.innerHTML += fila;
    });
}


function limpiarCampos() {
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("identificacion").value = "";
}