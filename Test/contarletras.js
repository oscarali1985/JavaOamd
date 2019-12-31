//en caso de ser numero

let par = "casa";
var numero= "casa";
let counts = {};
var repeticion=0;
// your code here





function contar(cadena,repeticion)
        {
            for(i=0;i<cadena.length;i++){
                if(cadena.charAt(i) == "a"){
                repeticion++;
        }
            }
        }


//console.log(contar(par,repeticion));
//console.log(repeticion);


function test(repeticion,numero) {
    
    
    for(i=0;i<numero.length;i++){
        if(numero.charAt(i) == "a"){
        repeticion++;
        }   
    }
}

test(repeticion)
console.log(repeticion);

