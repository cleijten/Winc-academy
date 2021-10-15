const firstName = prompt("Welkom! Wat is je naam?", "<vul je naam in>");
alert("Hey " + firstName);

// function voor genereren van het random nummer
const getRandomNumber = function (min, max) {
  min = Math.ceil(min); // 0
  max = Math.floor(max); // 25
  return Math.floor(Math.random() * (max - min) + min);
};

// zoekrange
const fromAmount = prompt(
  "Wat is het laagste getal dat je wilt raden?",
  "<vanaf>"
);
const toAmount = prompt("Wat is het hoogste getal dat je wilt raden?", "<tot>");

const randomNumber = getRandomNumber(fromAmount, toAmount);

// for loop voor 5 pogingen om het nummer te raden
let i = 1;

for (i = 1; i <= 5; i++) {
  const numberEntry = parseInt(
    prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")
  );

  if (numberEntry !== randomNumber) {
    alert(
      "Dat is niet correct. Raad opnieuw, je hebt " +
        (5 - i) +
        " pogingen over."
    );
  } else {
    alert("Gefeliciteerd je hebt gewonnen!");
    break;
  }
}

alert("Dag " + firstName + ". Tot de volgende keer!");