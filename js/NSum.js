const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sum = (n, numbers) => {
  let sum = 0;

  for (let index = 0; index < n; index++) {
    sum += Number.parseInt(numbers[index]);
  }

  return sum;
};

let numbers = [];
let n = null;

readline.on("line", (line) => {
  if (n === null) {
    n = line;
  } else {
    numbers = line.split(" ");
    readline.close();
    console.log(sum(n,numbers));
  }
});
