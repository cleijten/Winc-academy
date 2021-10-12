//Functie die checkt of het number groter dan 100 is. Dit is een function die iets doet.

const checkBigNumber = function (getal) {
  if (getal > 100) {
    // console.log("getal is > 100");
    return true;
  } else {
    // console.log("getal is <= 100");
    return false;
  }
};

const bigNumber = 90;

const result = checkBigNumber(bigNumber);
console.log(result);

//Functie die checkt aantal mensen in de club en de leeftijd. Dit is een function die iets doet.

const enterClub = function (currentnumber, age) {
  if (age < 18) {
    const msg = "this is a club for adults";
    return msg;
  } else if (currentnumber < 75) {
    const msg = "come in";
    return msg;
  } else {
    const msg = "it's too busy now, come back later";
    return msg;
  }
};

// const writeMsg = enterClub(80, 22);
// console.log(writeMsg);

// const writeMsg = enterClub(70, 16);
// console.log(writeMsg);

const writeMsg = enterClub(70, 22);
console.log(writeMsg);

//Function voor het berekenen van gemiddelde. Dit is een function die iets produceert.

const calcAverage = function (arraynumbers) {
  const avg =
    (arraynumbers[0] +
      arraynumbers[1] +
      arraynumbers[2] +
      arraynumbers[3] +
      arraynumbers[4]) /
    arraynumbers.length;

  const avground = Math.round(avg);
  return avground;
};

const numberArray = [1, 8, 3, 4.2, 5];
const calcAvg = calcAverage(numberArray);
console.log(calcAvg);
