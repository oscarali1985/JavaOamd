
cadena="hola";
cadena2="hola";
function contarletra(cadena,cadena2){
    var repeticion=0;

    for(i=0;i<cadena.length;i++){
       
        repeticion++;
        
            //console.log(repeticion);
    }
    for(i=0;i<cadena2.length;i++){
       
        repeticion++;
        
            //console.log(repeticion);
    }
    
   return repeticion;
    
}

console.log(contarletra(cadena,cadena2));