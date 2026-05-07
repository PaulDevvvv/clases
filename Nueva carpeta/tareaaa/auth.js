const usuarios = [
    { user: "admin", pass: "123", rol: "Administrador" },
    { user: "user", pass: "456", rol: "Operador" }
];

export function login(u, p) {
    return usuarios.find(usuario => usuario.user === u && usuario.pass === p);
}