
//Instrucciones
//1) Cambie el valor del segundo elemento a 'Steven'
//2) Establezca la última posición en 'Pepe'
//3) Establezca el primer elemento en el valor del tercer elemento concatenado con el valor del quinto elemento.
//4) Reverse loop (desde el final hasta el principio) toda la matriz e imprimir todos los elementos.

var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'];
var arrayTem =[];
//your code here
var posCamArra = 10; 
var nuevovalor="Steven";

        function cambio(posCamArra,nuevovalor,myArray,arrayTem){
    for (x=0 ; x<posCamArra; x++){
         arrayTem.push(myArray[x]);
      }
   
      for (x=0 ; x<posCamArra+1; x++){
       myArray.shift();
    }
   
    myArray.unshift(nuevovalor);
   
    for (x=posCamArra-1 ; x>=1; x--){
       myArray.unshift(arrayTem[x]);
    } 

    }
  





//console.log(mySampleArray);
cambio(posCamArra,nuevovalor,mySampleArray,arrayTem)
console.log(mySampleArray);
//console.log(arrayTem);
//e3ra parte

//console.log(mySampleArray.reverse());