var bulletPosition = 3;

function spinChamber()
{
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
}

function fireGun(bulletPosition)
{let camara=spinChamber();
	if (camara===bulletPosition){
	  console.log('True '+camara+'bala '+bulletPosition);
	  return false;
	  	}else{
	  	   console.log('false '+camara+'bala'+bulletPosition);
	  return true
	}
	  
	
}



if(fireGun(bulletPosition)) console.log('Keep playing :)');
else console.log('you are dead!');