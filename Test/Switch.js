
var dia = "";

console.log("'What day of the week is now'");

process.stdin.setEncoding('utf8');
var weekday;
process.stdin.on('readable', function() {
    weekday = process.stdin.read();
    if (weekday !== null) {
		console.log("'El dia es "+weekday);

		switch (weekday) {
			case 'mon':
			  console.log('El kilogramo de Naranjas cuesta $0.59.');
			  break;
			case 'Manzana':
			  console.log('El kilogramo de Manzanas cuesta $0.32.');
			  break;
			case 'Banana':
			  console.log('El kilogramo de Bananas cuesta $0.48.');
			  break;
			case 'Cereza':
			  console.log('El kilogramo de Cerezas cuesta $3.00.');
			  break;
			case 'Mango':
			case 'Papaya':
			  console.log('El kilogramo de Mangos y Papayas cuesta $2.79.');
			  break;
			default:
			  console.log('Lo lamentamos, por el momento no disponemos de ' + weekday+ '.');
		  }
        
        process.exit();
    }
});



