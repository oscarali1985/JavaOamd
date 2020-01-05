
word="hoa";
function isOddLength(word) {
    var repeticion=0;

    for(i=0;i<word.length;i++){
       
        repeticion++;
        
            //console.log(repeticion);
    }
    
    if (repeticion%2!==0){
        return true
    }else{
        return false
    }
  
    
}

console.log(isOddLength(word));