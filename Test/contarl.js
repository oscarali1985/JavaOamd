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
                    console.log(cadena.charAt(i))
                        }
                        caracter=cadena.charAt(i);
                        return caracter;
                }


            function contarletra(cadena,repeticion){

                for(i=0;i<cadena.length;i++){
                    if(cadena.charAt(i) == "a"){
                    repeticion++;
                        }
                }
                
               return (repeticion);
                
            }
            

            
    


leerletra(cadena);
console.log(contarletra(cadena,repeticion));






