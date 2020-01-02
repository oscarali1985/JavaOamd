var myArray = [2,2];
suma=0;
promedio=0;
for (var index in myArray){
     suma=suma+myArray[index];
	console.log(myArray[index]);
	
	
}
console.log("Array "+myArray);
console.log("index "+index+1);
promedio=suma/index+1;
console.log('promedio '+promedio);