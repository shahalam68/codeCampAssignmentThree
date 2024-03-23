const johnScores = [89, 120, 103];

const mikeScores = [116, 94, 123];

const maryScores = [97, 134, 105];

function calculateAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

const johnAverage = calculateAverage(johnScores);
const mikeAverage = calculateAverage(mikeScores);
const maryAverage = calculateAverage(maryScores);

let winner = "";
let winningAverage = 0;

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  winner = "John's team";
  winningAverage = johnAverage;
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  winner = "Mike's team";
  winningAverage = mikeAverage;
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  winner = "Mary's team";
  winningAverage = maryAverage;
} else {
  winner = "It is a draw";
  winningAverage = johnAverage;
}

console.log(
  `${winner} wins with an average score of ${winningAverage.toFixed(2)}`
);
