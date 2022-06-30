const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const totalPoints = 10;

const calculateBettingRatioForEachOption = (percentagePointsOption1) => {

    let pointsOption1 = (totalPoints * percentagePointsOption1) / 100;
    let pointsOption2 = totalPoints - pointsOption1;

    let ratioOption1 = (totalPoints / pointsOption1).toPrecision(11);
    let ratioOption2 = (totalPoints / pointsOption2).toPrecision(11);

    console.log(ratioOption1);
    console.log(ratioOption2);

}


readline.on("line", (input) => {
    let percentagePointsOption1 = Number.parseInt(input);
    calculateBettingRatioForEachOption(percentagePointsOption1);
});