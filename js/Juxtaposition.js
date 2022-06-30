const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const defineHowManyDesignsArePossible = (data) => {
    const processedData = data.split(" ");
    const eyes = Number.parseInt(processedData[0]);
    const noses = Number.parseInt(processedData[1]);
    const mouths = Number.parseInt(processedData[2]);
    return eyes * noses * mouths;
}


readline.on("line", input => {
    console.log(defineHowManyDesignsArePossible(input));
});