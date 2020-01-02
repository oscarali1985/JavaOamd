var arr = [4,5,734,43,45,100,4,56,23,67,23,58,45];
suma=0;
//your code here
function sumOdds(arr,suma){
    for (x=0;x<arr.length;x++){
            if(arr[x]% 2 !== 0){
            
            suma=suma+arr[x];
            
            }
        
    }
    return suma;
}
console.log(sumOdds(arr,suma));

