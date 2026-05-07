import { login } from './auth.js';

let vehiculos = []; 


const seccionLogin = document.getElementById('login');
const seccionApp = document.getElementById('app');


document.getElementById('btn-entrar').addEventListener('click', () => {
    const user = document.getElementById('u').value;
    const pass = document.getElementById('p').value;
    const sesion = login(user, pass);

    if (sesion) {
        seccionLogin.style.display = 'none';
        seccionApp.style.display = 'block';
        document.getElementById('msg').innerText = `Usuario: ${sesion.user} (${sesion.rol})`;
    } else {
        alert("Datos incorrectos");
    }
});

document.getElementById('btn-registrar').addEventListener('click', () => {
    const placa = document.getElementById('placa').value;
    if (!placa) return alert("Escribe la placa");

    vehiculos.push({ placa: placa.toUpperCase(), hora: new Date() });
    actualizarLista();
    document.getElementById('placa').value = ""; 
});


document.getElementById('btn-cobrar').addEventListener('click', () => {
    const placa = document.getElementById('placa-salida').value.toUpperCase();
    const i = vehiculos.findIndex(v => v.placa === placa);

    if (i === -1) return alert("No está en el sistema");

    const horas = 2; 
    const total = horas * 1.50; 

    alert(`Vehículo: ${placa}\nTotal a pagar: $${total}`);
    vehiculos.splice(i, 1);
    actualizarLista();
});

function actualizarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = vehiculos.map(v => `<li>${v.placa} - ${v.hora.toLocaleTimeString()}</li>`).join('');
}