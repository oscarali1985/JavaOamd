var myObj = {};

// --> true

function addProperty(obj, key) {
      addProperty(myObj, 'myProperty');
}

addProperty('Hola', 11);
console.log(myObj.myProperty);
