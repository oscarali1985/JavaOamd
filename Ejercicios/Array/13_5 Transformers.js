let incomingAJAXData = [
	{ name: 'Mario', lastName: 'Montes' },
	{ name: 'Joe', lastName: 'Biden' },
	{ name: 'Bill', lastName: 'Clon' },
	{ name: 'Hilary', lastName: 'Mccafee' },
	{ name: 'Bobby', lastName: 'Mc birth' }
];

//your code here
let extraer = incomingAJAXData.map(function(incomingAJAXData){
  console.log(`${incomingAJAXData.name} ${incomingAJAXData.lastName}`)
	return incomingAJAXData;
});


