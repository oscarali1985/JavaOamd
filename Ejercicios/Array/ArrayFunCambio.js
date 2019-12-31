//declaring the array
var myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var arrayTem =[];
var posCamArra = 1; 
var nuevovalor="Ana";

function cambio(posCamArra,nuevovalor,myArray,arrayTem){
        console.log(myArray[2]);

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



    cambio(posCamArra,nuevovalor,myArray,arrayTem)
//3. print the position of step 2
console.log(myArray);
console.log(arrayTem);
//console.log(myArray[posCamArra-1]);
