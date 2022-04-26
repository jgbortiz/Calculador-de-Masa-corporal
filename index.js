
// usuario y contraseña
const usuarioContrasena = () =>{
    let usuario = prompt("Ingrese su Usuario")
    while ( usuario != "julian"){
    alert( "Usuario Incorrecto");
    usuario = prompt("Ingrese  su usuario")

    return usuario
} 
    let contrasena = prompt("Ingrese la contraeña")
    while (contrasena!= "1234") {
    alert("Contraseña incorresta")
    contrasena = prompt("Ingrese la contraeña")
}   
    alert (`Hola ${usuario}, Vienvenido a Gomelski Griil & Market`)
}
usuarioContrasena()