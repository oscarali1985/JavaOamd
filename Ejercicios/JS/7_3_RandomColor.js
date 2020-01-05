//Instrucciones de tu profesor:
//Hemos creado una función que devuelve un color basado en un número entre 1 y 4 (para cualquier número diferente, devolverá el color negro).

//Instrucciones
//Digamos que somos maestros en un aula de 10 estudiantes y queremos asignar aleatoriamente UN color, entre rojo, amarillo, azul y verde, a CADA estudiante. 

//(solo UN color por estudiante)

//Cambie la función " getAllStudentColors " para que devuelva una matriz de 10 colores, con cada elemento en la matriz que representa el color asignado a cada alumno.

//Insinuación: 
//- Tienes 10 estudiantes, necesitas recorrer 10 veces.
//- Cada vez que realices un bucle, genera un número aleatorio entre 1-4 usando la función Math.random () que vimos en el último ejercicio.
//- Use la función " getColor " en este ejercicio para obtener el nombre del color del número que obtiene.
//- Imprima el color en la consola.
////
//MENSAJE IMPORTANTE:
//Si siente que no comprende el looping, es una buena idea completar el aula Arrays Repl.it y volver aquí:
//

function getColor(colorNumber=0)
{
	//making sure is a number and not a string
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; break;
		case 2: return "yellow"; break;
		case 3: return "blue"; break;
		case 4: return "green"; break;
		default: return "black"; break;
	}
}

function getAllStudentColors(){
	var myArray=[];
    //your loop here
    for (x=0;x<10;x++){
       var  exampleColor= getColor(Math.floor(Math.random() * (4 - 1)) + 1);
       myArray.push(exampleColor);
    }
    
    return myArray
}

console.log(getAllStudentColors());