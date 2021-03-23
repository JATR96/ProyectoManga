let usuarioValido = { id: 1, username : 'user1', pass : 'pass1' };

let nombreusuario = document.querySelector('#nombreUsuario');
let contraseña = document.querySelector('#contrasena')

// nombreusuario.style.background = "red";
// nombreusuario.value = "texto prueba";
// contraseña.style.background = "gray";

const validarNomberUsuario = () => {
    let errornombreUsuario = document.querySelector(#errornombreUsuario)
    errornombreUsuario.textContect = '';
    if (errornombreUsuario.validity.patternMismatch) {
        errornombreUsuario.textContect = "No confirmado";
    }
}