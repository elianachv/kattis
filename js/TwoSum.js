const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const twoSum = (input) => {
    const data = input.split(" ");
    const a = Number.parseInt(data[0]);
    const b = Number.parseInt(data[1]);
    return a + b;
}

readline.on('line', (input) => {
    console.log(twoSum(input));
    readline.close();
});