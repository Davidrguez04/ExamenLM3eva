/**
 * 
 */
function altaAlumno(){
	//Declaramos las variables y le asignamos un valor al preguntarselo al usuario
	var nombre=prompt("Introduzca su nombre");
	var apellidos=prompt("Introduzca sus apellidos");
	var edad=prompt("Cual es su edad");
	//Aclaramos el tipo de edad y nombre y apellidos
	var edad1=Number(edad);
	let nombreCompleto=String(nombre)+" "+String(apellidos);
	//imprimimos por pantalla lo que se pide
	document.write("Nombre y apellidos: "+nombreCompleto+"<br>");
	document.write("Edad: "+edad1+" anyos<br>");
	document.write("Edad es un tipo: "+ typeof edad1);


	
}