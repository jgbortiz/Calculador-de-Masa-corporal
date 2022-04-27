
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
 
 saluda(usuario);
}
const saluda=(usuario)=>{
    alert(`Bienvenido ${usuario}`)
    
}


pedirNombre()
usuarioContrasena()

//Cotizador de descuentos

const menu = prompt("Elige el descuento a realizar\n" +
"1-Realizar 20% de descuento\n"+
"2-Realizar 30% de descuento\n"+
"3-Realizar 40% de descuento\n"+
"0-Salir\n");

const  elegirOpcionMenu=()=>{
    let esCorrecto;
    let opcion;
    do {
        opcion =(menu);

        switch (opcion){
            case "0":
            case "1":
            case "2":
            case "3":
                esCorrecto = true;
                break;
            default:
                esCorrecto = false;
                alert(`La opcion ${opcion} no es valida `);
                break;
            
        }
    } while (!esCorrecto);
    return opcion;
}

const hacerUno=()=>{

    let descuento20 = precio - (precio  * 0.2);
    alert(`Tu descuento del 20% es de ${descuento20}`);
}

const hacerDos=()=>{

    let descuento30 = precio - (precio  * 0.3);
    alert(`Tu descuento del 30% es de ${descuento30}`);
}
const hacerTres=()=>{
	 
    let descuento40 = precio - (precio  * 0.4);
    alert(`Tu descuento del 40% es de ${descuento40}`);
}

let salir = false;
let precio ;

while (!salir){
    let opcion = elegirOpcionMenu();
	
	precio = prompt("Ingrese precio");
    
	switch (opcion){
        case "1":
            hacerUno();
            break;
        case "2":
            hacerDos();
            break;
        case "3":
            hacerTres();
            break;
        case "0":
            salir = true;
            break;    

    }
}
