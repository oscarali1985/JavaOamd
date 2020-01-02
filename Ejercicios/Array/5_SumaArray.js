var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,5345,234,6,78,54,23,67,3,6,432,55,23,25,12];

function sumTheElements(theArray){
	
	var total = 0;
	
	for(x=0;x<mySampleArray.length; x++){
	  total=total+mySampleArray[x];
	}

	return total;
}

console.log(sumTheElements(mySampleArray));