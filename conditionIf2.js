var price=0;




//

console.log("How many people are coming to your wedding?");
process.stdin.setEncoding('utf8');
var price;
process.stdin.on('readable', function() {
  price = process.stdin.read();
    if (price !== null) {
      if (price<= 50){
        price=4000;
      }else if (price<= 100){
        price=10000;
      }else if (price<= 200){
        price=15000;
      }else {
        price=20000;
      }
      console.log('Your wedding will cost '+price+' dollars');

        process.exit();
    }
});
