
//par y mayor que 10

word="hola12345161";
function isEvenAndGreaterThanTen(word) {
    var repeticion=0;

    for(i=0;i<word.length;i++){
       
        repeticion++;
        
            //console.log(repeticion);
    }
    
    if ((repeticion%2===0)&&(repeticion>10)){
        return true
    }else{
        return false
    }
  
    
}

console.log(isEvenAndGreaterThanTen(word));