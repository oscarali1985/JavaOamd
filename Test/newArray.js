var myArray = [2,2];
suma=0;
promedio=0;
for (var index in myArray){
     suma=suma+myArray[index];
	console.log(myArray[index]);
	
	
}
console.log("Array "+myArray);
console.log("index "+index+1);
promedio=suma/index+1;
console.log('promedio '+promedio);

//prueba

var persons = [
     {firstname : "Malcom", lastname: "Reynolds"},
     {firstname : "Kaylee", lastname: "Frye"},
     {firstname : "Jayne", lastname: "Cobb"}
   ];
   
   
   function getFullName(item) {
     var fullname = [item.firstname,item.lastname].join(" ");
     return fullname;
   }
   
   function myFunction() {
     console.log(persons.map(getFullName));
   }

   //console.log(getFullName(persons));
   console.log(myFunction());

   