
        let biblioteca = [];

        function addLibros(titulo, autor, genero) {
            return { titulo, autor, genero };
        }

        function addLibro() {
            let titulo = document.getElementById("titulo").value;
            let autor = document.getElementById("autor").value;
            let genero = document.getElementById("genero").value;

            if(titulo === '' || autor === '') {
                alert("Llene todos los campos");
                return;
            }

            let libro = addLibros(titulo, autor, genero);
            biblioteca.push(libro);

            document.getElementById("titulo").value = '';
            document.getElementById("autor").value = '';

            alert('Producto registrado: ' + libro.titulo);
            mostrarTodos();
        }

        function mostrarTodos() {
            let lista = document.getElementById("listaLibros");
            lista.innerHTML = '';

            if (biblioteca.length === 0) {
                lista.innerHTML = 'No existen productos registrados';
                return;
            }

            biblioteca.forEach(function(libro, index) {
                let lib = document.createElement('div');
                lib.innerHTML = `Producto ${index + 1}: ${libro.titulo} - $${libro.autor} (${libro.genero})`;
                lista.appendChild(lib);
            });
        }

        function eliminarLibro() {
            if(biblioteca.length > 0) {
                let eliminarlibro = biblioteca.pop();
                alert('Eliminado: ' + eliminarlibro.titulo);
                mostrarTodos();
            } else {
                alert('No hay nada que eliminar');
            }
        }

        function filtrarPorGenero() {
            let genero = prompt('Introduce categoría');
            if(!genero) return;

            let lista = document.getElementById("listaLibros");
            lista.innerHTML = '';

            let librosFiltrados = biblioteca.filter(libro =>
                libro.genero.toLowerCase() === genero.toLowerCase()
            );

            if(librosFiltrados.length === 0) {
                lista.innerHTML = 'No existen productos en esa categoría';
                return;
            }

            librosFiltrados.forEach(function(libro, index) {
                let lib = document.createElement('div');
                lib.innerHTML = `${libro.titulo} - $${libro.autor} (${libro.genero})`;
                lista.appendChild(lib);
            });
        }

        function resumen(){
            let generos = new Set(biblioteca.map(libro => libro.genero));
            let resumen = 'Existencias:\n';
            generos.forEach(function(genero) {
                let cantidad = biblioteca.filter(libro => libro.genero === genero).length;
                resumen += `${genero}: ${cantidad}\n`;
            });
            alert(resumen);
        }
    