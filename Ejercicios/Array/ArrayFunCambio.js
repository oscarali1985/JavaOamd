
var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro'];
//var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'];

var arrayTem =[];
var posCamArra = 1; 
var nuevovalor="Steven";

function cambio(posCamArra,nuevovalor,myArray,arrayTem){
   //Copio en array temporal
    for (x=0 ; x<posCamArra; x++){
          arrayTem.push(myArray[x]);
       }
       //Elimino el valor deseado
       for (x=0 ; x<posCamArra+1; x++){
       myArray.shift();
    }
    //Se añade el valor deseado
    myArray.unshift(nuevovalor);
    
    //Se agrega el reto de los valores
    for (x=arrayTem.length-1; x>=0; x--){
      myArray.unshift(arrayTem[x]);

    //Se limpiar array Temporal
    for (x=arrayTem.length-1; x>=0; x--){
       arrayTem.shift();
    }  

} 
    }
  
if (posCamArra >= mySampleArray.length){
   console.log("El valor ingresado es mayor a la longitud del array");
}else{
   console.log(mySampleArray);
   cambio(posCamArra,nuevovalor,mySampleArray,arrayTem);
   console.log(mySampleArray);
  console.log(arrayTem);
}