
//Instrucciones
//1) Cambie el valor del segundo elemento a 'Steven'
//2) Establezca la última posición en 'Pepe'
//3) Establezca el primer elemento en el valor del tercer elemento concatenado con el valor del quinto elemento.
//4) Reverse loop (desde el final hasta el principio) toda la matriz e imprimir todos los elementos.

var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'];
//var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria'];
//your code here
var arrayTem =[];
var posCamArra = 1; 
var nuevovalorc="Steven";

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
  
    function modificar(posmodArra,nuevovalor,myArray,arrayTem){
      //Copio en array temporal
       for (x=0 ; x<posmodArra; x++){
             arrayTem.push(myArray[x]);
          }
          //Elimino el valor deseado
       for (x=0 ; x<posmodArra+1; x++){
          myArray.shift();
       }
       //Se añade el valor deseado
       myArray.unshift(nuevovalor);
       
       //Se agrega el reto de los valores
       for (x=arrayTem.length-1; x>=0; x--){
         myArray.unshift(arrayTem[x]);
        } 
      //Se limpiar array Temporal
        for (x=arrayTem.length-1; x>=0; x--){
         arrayTem.shift();
       } 

   }   

if (posCamArra >= mySampleArray.length){
   console.log("El valor ingresado es mayor a la longitud del array");
}else{
 
   console.log(mySampleArray);
   //1er punto
   cambio(posCamArra,nuevovalorc,mySampleArray,arrayTem);
   //Segundo
   mySampleArray.push('Pepe');
      console.log(mySampleArray);
   console.log(arrayTem);
}
// 'Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'
//1) Cambie el valor del segundo elemento a 'Steven'
// 'Esmeralda', 'Steven','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie',     'Pepe'
//correcta Pepe Bart Cesco Fernando Lou  Maria Pedro  Lebron Ruth Steven RuthPedro
//3) Establezca el primer elemento en el valor del tercer elemento concatenado con el valor del quinto elemento.
//4) Reverse loop (desde el final hasta el principio) toda la matriz e imprimir todos los elementos.
//