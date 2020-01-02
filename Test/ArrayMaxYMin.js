var myArray = [43,23,6,87,43,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,-34];
var max=0;
var min=0;

for(x=0;x<myArray.length ;x++){
    if(myArray[x]>max){
      max=myArray[x];
    }
  
} 
min=max;
for(x=0;x<myArray.length ;x++){
    if(myArray[x]<min){
      min=myArray[x];
    }
  
} 

console.log('Max:' +max);

console.log('Min:'+ min);