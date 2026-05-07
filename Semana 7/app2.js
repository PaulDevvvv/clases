        const form = document.getElementById('userForm');
        const tableBody = document.querySelector('#dataTable tbody');
        const btnSubmit = document.getElementById('btnSubmit');
        
        let editIndex = -1;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const descripcion = document.getElementById('descripcion').value;
            const currentIndex = document.getElementById('editIndex').value;

            if (currentIndex === "-1") {
             
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${nombre}</td>
                    <td>${email}</td>
                    <td>${descripcion}</td>
                    <td><button class="btn-edit" onclick="editRow(this)">Modificar</button></td> `;
            } else {
    
                const row = tableBody.rows[currentIndex];
                row.cells[0].innerText = nombre;
                row.cells[1].innerText = email;
                row.cells[2].innerText = descripcion;
                
        
                document.getElementById('editIndex').value = "-1";
                btnSubmit.innerText = "Registrar Datos";
                btnSubmit.style.backgroundColor = "#2ecc71";
            }

            form.reset();
        });

        function editRow(button) {
            const row = button.parentNode.parentNode;
            const index = row.rowIndex - 1;
            document.getElementById('nombre').value = row.cells[0].innerText;
            document.getElementById('email').value = row.cells[1].innerText;
            document.getElementById('descripcion').value = row.cells[2].innerText;
            
            document.getElementById('editIndex').value = index;

            btnSubmit.innerText = "Actualizar Datos";
            btnSubmit.style.backgroundColor = "#f39c12";
        }