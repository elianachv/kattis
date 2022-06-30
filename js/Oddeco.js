const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


const echo = (words) => {

    for (let index = 0; index < words.length; index++) {

        if (index % 2 === 0) {
            console.log(words[index])
        }

    }

}

const words = [];
let q = null;

readline.on("line", line => {

    if (q === null && words.length === 0) {
        q = Number.parseInt(line)
    }else{
        words.push(line);
    }

    if(words.length === q){
        readline.close();
        echo(words);
    }
    
});