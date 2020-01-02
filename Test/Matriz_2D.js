var coordinatesArray = [[33.747252,-112.633853],[-33.867886, -63.987],[41.303921, -81.901693],[-33.350534, -71.653268]];

console.log(coordinatesArray);
console.log(coordinatesArray.length);

for (x=0;x<coordinatesArray.length;x++){
        for(y=0;y<coordinatesArray[x].length;y++){
            console.log(coordinatesArray[x][y]);
        }
        
  }

  //imprimir columna 0
  console.log("imprimir columna 0");
  for (x=0;x<coordinatesArray.length;x++){
    for(y=0;y<coordinatesArray[x].length;y++){
         if (y==0){
        console.log(coordinatesArray[x][y]);
        }
    }
    
}
console.log("imprimir columna 1");
  //imprimir columna y

  for (x=0;x<coordinatesArray.length;x++){
    for(y=0;y<coordinatesArray[x].length;y++){
         if (y==1){
        console.log(coordinatesArray[x][y]);
        }
    }
    
}