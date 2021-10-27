// A Superheroes
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];
const findSpiderMan = function(superheroes) {
  return superheroes.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};
console.log("Find Spiderman:", findSpiderMan(superheroes));

// B Double Array values

const doubleArrayValues = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));



//C

const containsNumberBiggerThan10 = function (array) {
  
  const y = array.some(x => x > 10);
  return y;

}

console.log("Zit er een getal bij hoger dan 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log("Zit er een getal bij hoger dan 10:", containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
  // result should be false

//D

const isItalyInTheGreat7 = function (array) {
  return array.includes("Italy");


}

console.log("Staat Italie erbij:", isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));

  // result should be true

//E
const tenFold = function(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
  });
  return newArray;
};
  console.log("for each functie", tenFold([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

  const tenFold2 = function(array) {
  return array.map(number => {
    return number * 10;
  });
};
  console.log("map functie", tenFold2([1, 4, 3, 6, 9, 7, 11]))
  // result should be [10, 40, 30, 60, 90, 70, 110]

  //F

const isBelow100 = function (array) {
  const number = array.every(e => e < 100);
  return number;
  }

    console.log("getallen onder 100?", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false

//G

const bigSum = function (array) {
  const total = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return total;
}

   console.log("Totaal van de array", bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118 