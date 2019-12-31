var myArray = ['Juan','Maria'];
    console.log(myArray);
    //añande al final//
    myArray.push('Chris');
     //añande al inicio
    myArray.unshift('Pedro');
    console.log(myArray);
    //elimina al incio
    myArray.shift();
    console.log(myArray);


    for (var index in myArray) {
        console.log(myArray[index]);
        
    }

    var myArray1 = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
  
console.log(myArray1);
//Desde hasta
console.log(myArray1.slice(2, 4));
//Desde cuantas posciones
console.log(myArray1.splice(2, 4));

//myArray1.sort(function(a, b){return a – b});
 //   console.log("Ordenado "+myArray1); //[ 1, 5, 10, 25, 40, 100 ]

    

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log('leng'+fruits.length); 
    console.log("Original "+fruits)
    fruits.sort();
    console.log("Ordenado "+fruits); //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 
    fruits.reverse();
    console.log("Ordenado inverso "+fruits); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]
    
    theLastOne=  (fruits[fruits.length-1]);
console.log(theLastOne);