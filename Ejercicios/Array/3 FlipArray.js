var arr = [45,67,87,23,5,32,60];

//Your code here.
var newArray=[];

//console.log(arr.length);
for (x=arr.length-1; x>=0; x--){
  newArray.push(arr[x]);
}

console.log(newArray);