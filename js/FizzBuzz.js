const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fizzBuzz = (input) => {
  const data = input.split(" ");
  const x = Number.parseInt(data[0]);
  const y = Number.parseInt(data[1]);
  const n = Number.parseInt(data[2]);

  for (let i = 1; i <= n; i++) {

    if (i % x === 0 && i % y === 0) {
      console.log("FizzBuzz");
    } else if (i % x === 0) {
      console.log("Fizz");
    } else if (i % y === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }

  }
}

readline.on('line', (input) => {
  fizzBuzz(input);
  readline.close();
});