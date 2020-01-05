 //exponente
function computePower(num, exponent) {
    var n=1;

    for (x=0;x<exponent;x++){
        n=n*num;
        console.log(n);
    }
    return n
  }

  var output = computePower(2, 3);
console.log(output);