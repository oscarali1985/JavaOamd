function cloneArray(givenArray)
{
	var newCloneArray = [];
	
	//your code here
	for(x=0; x<givenArray.length;x++){
	  newCloneArray.push(givenArray[x]);
	}
	return newCloneArray;
}

var myArray = [3,8,56,53,7,43,87,8,32];
var secondArray = cloneArray(myArray);
console.log(secondArray);