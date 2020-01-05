
cadena="hola";
cadena2="hol";
function contarletra(cadena,cadena2){
    var repeticion=0;
    var repeticion2=0;

    for(i=0;i<cadena.length;i++){
       
        repeticion++;
        
            //console.log(repeticion);
    }
    for(i=0;i<cadena2.length;i++){
       
        repeticion2++;
        
            //console.log(repeticion);
    }
    
    if (repeticion==repeticion2){
        return true
    }else{
        return false
    }
   
    
}

console.log(contarletra(cadena,cadena2));