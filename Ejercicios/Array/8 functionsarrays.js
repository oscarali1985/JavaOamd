var array1 = [2,4];
var array2 = [1,2,3,4];
var array3 = [2,4,3,6,4];

function multiply(theArray){
	
	let result = 1;
	
	for(x=0;x<theArray.length;x++)
	result=result*theArray[x];
	
	return result;
}


console.log(multiply(array1));
console.log(multiply(array2));
console.log(multiply(array3));