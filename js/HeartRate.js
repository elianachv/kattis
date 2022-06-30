const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


function calculateABPM(BPM, beats, isMin) {
    let t = BPM / beats;
    if (isMin) {
        t *= -1
    }
    return (BPM + t).toFixed(4);
}


function calculateBPM(beats, seconds) {
    return (60 * beats / seconds).toFixed(4);
}

const processHeartRateCases = (cases) => {
    const numberOfCases = cases[0];
    for (let i = 1; i <= numberOfCases; i++) {
        let heartRateData = cases[i].split(" ");
        let beats = Number.parseInt(heartRateData[0]);
        let seconds = Number.parseFloat(heartRateData[1]);
        let BPM = Number.parseFloat(calculateBPM(beats, seconds));
        console.log(`${calculateABPM(BPM, beats, true)} ${BPM.toFixed(4)} ${calculateABPM(BPM, beats, false)}`);
    }
}

const input = [];
readline.on("line", line => input.push(line)).on("close", () => processHeartRateCases(input));

