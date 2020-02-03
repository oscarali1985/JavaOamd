//declaring the array
var myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var datostem =[];
var diap = 4; 

//1. print the item here
console.log(myArray[2]);
//2. change 'thursday'a value here to null
//console.log(myArray);
 for (x=0 ; x<diap; x++){
      datostem.push(myArray[x]);
   }

   for (x=0 ; x<diap+1; x++){
    myArray.shift();
 }

 myArray.unshift(null);

 for (x=diap-1 ; x>=1; x--){
    myArray.unshift(datostem[x]);
 } 
//3. print the position of step 2
console.log(myArray[diap-1]);

