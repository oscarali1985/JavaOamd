var globalVar = 2;
var variable1 =0;
var variable2 =0;


//this is my multi function, receives 2 variables and multiplies them.
function multi(variable1, variable2){
	
	//variable1 and variable2 are only available inside of this function
	return (variable2 * variable1 * globalVar);
	
}

//This runs perfect, globalVar is being used.
console.log(multi(2,3));


//This results in an error because it can not find the variable1 on this scope.
console.log(variable1);

