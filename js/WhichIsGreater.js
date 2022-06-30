const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const wichIsGreater = (input) => {
    const data = input.split(" ");
    const a = Number.parseInt(data[0]);
    const b = Number.parseInt(data[1]);
    let result;
    a > b ? result = 1 : result = 0;
    return result;
}

readline.on('line', (input) => {
    console.log(wichIsGreater(input));
    readline.close();
});