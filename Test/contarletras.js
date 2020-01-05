//en caso de ser numero
//nombre.toUpperCase()
//nombre.toLowerCase()


var cadena = "AMERICA";
cadena= cadena.toLowerCase()
var counts = {};
var repeticion=0;
var caracter="";

// your code here

            function leerletra(cadena,caracter){

                for(i=0;i<cadena.length;i++){
                    console.log(cadena.charAt(i));
                    caracter=cadena.charAt(i);
                    console.log("carac: "+caracter);
                    contarletra(cadena,repeticion,caracter);
                        }
                        
                        return caracter;
                }


            function contarletra(cadena,repeticion,caracter){
                console.log("carac cl: "+caracter);

                for(i=0;i<cadena.length;i++){
                    if(cadena.charAt(i) == caracter){
                    repeticion++;
                        }
                        //console.log(repeticion);
                }
                
               return repeticion;
                
            }
            

            
    

contarletra("contarletra "+cadena);
leerletra(cadena);

console.log(repeticion);






