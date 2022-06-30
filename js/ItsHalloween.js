const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const defineIfItIsHalloween = (inputDate) => {
    const date = inputDate.split(" ");
    if ((date[0] == "OCT" && date[1] == "31") || (date[0] == "DEC" && date[1] == "25")) {
        console.log("yup");
    } else {
        console.log("nope");
    }
}

readline.on("line", input => {
    defineIfItIsHalloween(input);
});