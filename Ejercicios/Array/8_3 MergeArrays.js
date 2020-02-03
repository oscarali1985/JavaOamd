var blackPeople = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var whitePeople = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

function mergeArrays(firstArray, secondArray){
	
	var myResultingArray = [];
	
	//your code here
	myResultingArray = firstArray.concat(secondArray);
	
	return myResultingArray;
}

console.log(mergeArrays(blackPeople, whitePeople));