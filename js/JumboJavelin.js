const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const jumboJavelin = (javelines) => {
    let finalLength = 0;

    for (let i = 1; i <= Number.parseInt(javelines[0]); i++) {
        finalLength = finalLength + Number.parseInt(javelines[i]) - 1;
    }
    return finalLength +1 ;
}

const input = [];
readline.on("line", line => input.push(line)).on("close", () => console.log(jumboJavelin(input)));
    
