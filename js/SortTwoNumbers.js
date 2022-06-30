const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortNumbers = (input) => {
  const data = input.split(" ");
  const x = Number.parseInt(data[0]);
  const y = Number.parseInt(data[1]);

  if (x > y) {
    console.log(y + " " + x);
  } else {
    console.log(x + " " + y);
  }
};

readline.on("line", (input) => {
  sortNumbers(input);
  readline.close();
});
