//A item toevoegen

const addTheWordCool = (array) => {
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//resultaat: ["nice", "awesome", "tof", "cool"]

//B aantal elementen in array

const amountOfElementsInArray = (array) => array.length;

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

//resultaat: 3

//C eerste element uit array

const selectBelgiumFromBenelux = (array) => array[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//D laatste element uit array

const lastElementInArray = (array) => array[array.length - 1];

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// resultaat: "Schildpad"

//E eerste element uit array halen met slice en splice. Verschil: slice is een kopie van de array en met splice bewerk je de array zelf

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = (array) => presidents.slice(1, 4);

const impeachTrumpSplice = (array) => presidents.splice(1, 3);

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F elementen samenvoegen tot een array

const stringsTogether = (array) => array.join(" ");

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

//G 2 arrays samenvoegen tot 1 array

const combineArrays = (array1, array2) => array1.concat(array2);

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
