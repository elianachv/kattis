const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const echo = (echo) => {
    let finalEcho = echo;
    for (let i = 0; i < 2; i++) {
        finalEcho += " " + echo;
    }

    return finalEcho;
}
readline.on("line", line => {
    console.log(echo(line));
})