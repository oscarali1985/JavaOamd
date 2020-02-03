var allNumbers = [23,12,35,5,3,2,3,54,3,21,534,23,42,1];

var onlyOdds = allNumbers.filter(function(number){
	return ( number > 10)
});

console.log(onlyOdds);