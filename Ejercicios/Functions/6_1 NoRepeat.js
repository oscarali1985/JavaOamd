
//your function here
function nonRepeated(letras){
    for(i=0; i<letras.length; i++){
      let duplicado = false;
        for(j=0; j<letras.length; j++){
          if(letras[i]==letras[j] && (i != j)){
            duplicado = true;
            break;
          }
        }
    if (!duplicado) return letras[i];
    }
  }
  
  
  console.log(nonRepeated('abacddbec'));