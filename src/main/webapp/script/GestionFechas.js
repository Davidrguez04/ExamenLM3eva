/**
 * 
 */
function gestionFechas(){
	//Declaramos las variables y le asignamos un valor al preguntarselo al usuario
	var ciudad=prompt("Indique la ciudad la cual se quiere obtener la fecha y hora actual  -Opciones: Madrid, Paris y Londres");
	// Creamos un objeto Date para la fecha y la hora actuales.
	let ahora = new Date();
	
	//utilizamos switch para las diferentes respuestas que de el usuario.
	switch(ciudad){
		case "Madrid":
			//Imrprimimos por pantalla los difentes datos como la fecha que la calculamos con el Objeto Date
			document.write("Ciudad: Madrid<br>")
			document.write("Fecha: "+ahora.getDate()+"-"+ahora.getMonth()+"-"+ahora.getFullYear()+"<br>");
			document.write("Hora: "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
			break;
	
	case "Paris":
		document.write("Ciudad: París<br>");
		document.write("Fecha: "+ahora.getDate()+"-"+ahora.getMonth()+"-"+ahora.getFullYear()+"<br>");
		document.write("Hora: "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
		break;
	
	case "París":
		document.write("Ciudad: París<br>");
		document.write("Fecha: "+ahora.getDate()+"-"+ahora.getMonth()+"-"+ahora.getFullYear()+"<br>");
		document.write("Hora: "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
		break;
		
		case "Londres":
		document.write("Ciudad: Londres<br>");
		document.write("Fecha: "+ahora.getDate()+"-"+ahora.getMonth()+"-"+ahora.getFullYear()+"<br>");
		document.write("Hora: "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
		break;
		
		default:
			alert("Dato Introducido incorrecto, porfavor introducelo de nuvo revisando las mayusculas")
			break;
			
		}
		
		
	
	
}