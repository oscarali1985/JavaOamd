/**
 * In this example you can see how your code gets a lot
 * more organized when you separate it into smaller functions
**/

let peoplesGenre = ["m","m","m","f","m","m","f","m","f","f","f"];
let peoplesAges  = [23,45,12,19,40,29,56,70,17,26,29];
let peoplesNames = ["Tom","Rob","Emre","Liv","Ale","Bob","Alice","Jake","Yin","Kim","Lesly"];

function getAverage(ages){
	let sum = 0;
	//sum all the ages
	for( let i = 0; i < ages.length; i++ ) sum += parseInt(ages[i]);
	//divide between the total number of ages
	return Math.round(sum/ages.length);
}

function getYoungest(ages){
	//sort the array
	ages.sort();
	//return the first item because its sorted from small to big
	return ages[0];
}

function getPersonInfo(name){
	for( let i = 0; i < peoplesNames.length; i++ ){
		if(name === peoplesNames[i]){
			return "Name: " + peoplesNames[i] + ", age: "+peoplesAges[i]+", genre: "+peoplesGenre[i];
		}
	}
}


console.log("We have an average age of " + getAverage(peoplesAges));
console.log("The youngest person has " + getYoungest(peoplesAges) + " years old");
console.log("Here is Tom information -> "+getPersonInfo("Tom"))
console.log("Here is Alice information -> "+getPersonInfo("Alice"))

