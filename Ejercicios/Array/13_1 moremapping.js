

var myNumbers = [23,234,345,4356234,243,43,56,2];
var newArray=[];

myFunction= function (number) {
  return number *3;
}
newArray=myNumbers.map(myFunction)

console.log(newArray);