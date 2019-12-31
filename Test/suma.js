
console.log('What is your age?');
process.stdin.setEncoding('utf8');

var age = 0;


process.stdin.on('readable', function() {
    age = process.stdin.read();
    if (age !== null) {
        age = parseInt(age) + parseInt(10);
        console.log("Hello ".concat(age, ". How are you"));
        process.exit();
    }
});