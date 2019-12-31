var arr = [4,5,734,43,45];

//*****************
// Your code here
//*****************
function generateRandom() {
    return Math.floor(Math.random() * (40 - 1)) + 1;
  }

     for(var i = 0; i < 9; i++)
	{
		arr.push(generateRandom());
	}
	

  
console.log(arr);