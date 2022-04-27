
// usuario y contraseña


function saludo(persona){
    alert(`Hola ${persona} vienvenido a `)
}

const pedirNombre =()=> {
    let nombre = prompt("Dime tu nombre")
    saluda(nombre)
}


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

    alert (`Hola ${usuario}, Bienvenido a Gomelski Griil & Market`)
}
const saluda=(usuario)=>{
    alert(`Bienvenido${usuario}`)
    
}
pedirNombre()
usuarioContrasena()
saluda()
 


