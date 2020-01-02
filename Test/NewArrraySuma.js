
var myNumbers = [23,234,345,4356234,243,43,56,2];
var newArray = []
// your code here

var arrayOfCelsiusValues = [-2,34,56,-10];
//1) Restamos 86 – 32 = 54. 2) Dividimos 54 / 1,8 = 30.

var newArray = newArray.map(function(value){
    newArray = value+1;
    

    return value;
	
});



////////////
console.log(newArray);




var arrayOfCelsiusValues = [-2,34,56,-10];
//1) Restamos 86 – 32 = 54. 2) Dividimos 54 / 1,8 = 30.

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
    value = (value*1.8)+32;
    

    return value;
	
});

//console.log(arrayOfFahrenheitValues);