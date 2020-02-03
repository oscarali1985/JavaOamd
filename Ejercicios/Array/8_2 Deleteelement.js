var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

       function deletePerson(people,ValorEliminar){
          var arrayTem =[];
           for (x=0 ; x<people.length; x++){
               if(people[x]==ValorEliminar){
                 
             }else{
               arrayTem.push(people[x]);
               }
         }
 console.log(arrayTem);

 }


deletePerson(people,"daniella");
deletePerson(people,'juan');
deletePerson(people,'emilio');