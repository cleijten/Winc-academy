// zet de functies om naar een arrow functie

//A

const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions2();

//B

const fivePlusSeven = function () {
  return 5 + 7;
};

fivePlusSeven();

const fivePlusSeven2 = () => 5 + 7;

fivePlusSeven2();

//C

const myFunction = (a, b) => a + b;

//D

const addFive = a => a + 5;

//E

const createObject = () => ({ greeting: "hoi" });