
//Instrucciones
//1) Cambie el valor del segundo elemento a 'Steven'
//2) Establezca la última posición en 'Pepe'
//3) Establezca el primer elemento en el valor del tercer elemento concatenado con el valor del quinto elemento.
//4) Reverse loop (desde el final hasta el principio) toda la matriz e imprimir todos los elementos.

//var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria','Lou','Fernando','Cesco','Bart','Annie'];
var mySampleArray = ['Esmeralda','Kiko','Ruth','Lebron','Pedro','Maria'];
//your code here

var ValorEliminar="";

        function eliminar(myArray,ValorEliminar){
            var arrayTem =[];
           //Copio en array temporal
            for (x=0 ; x<myArray.length; x++){
                    if(myArray[x]==ValorEliminar){

                    }else{

                  arrayTem.push(myArray[x]);
            }
            console.log(arrayTem);
               }
               

            }



      eliminar(mySampleArray,ValorEliminar);
      
