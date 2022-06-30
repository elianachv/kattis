const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const triangleArea = (input) => {
    const data = input.split(" ");
    const altura = Number.parseInt(data[0]);
    const base = Number.parseInt(data[1]);
    return (base * altura)/2;
}

readline.on('line', (input) => {
    console.log(triangleArea(input));
    readline.close();
});