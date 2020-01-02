let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
myArray.push('Chris');
let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
    console.log("antes "+typeof myArray[index]);
    if (typeof myArray[index] == "object"){
        console.log(typeof myArray[index]);
        hello.push(myArray[index]);
    }
    
}

console.log(hello)