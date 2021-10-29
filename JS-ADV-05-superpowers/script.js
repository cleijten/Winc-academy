const { totalmem } = require("os");

const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

//array lichte superhelden

const lightWeightHeroes = superheroes.filter((hero) => {
  return hero.weight < 190;
});

console.log(lightWeightHeroes);

//array superhelden weight 200

const PoundsHeroes200 = superheroes
  .filter((hero) => {
    return hero.weight == 200;
  })
  .map((hero) => {
    return hero.name;
  });

console.log(PoundsHeroes200);

//array comics first appearance

const firstAppearance = superheroes.map((hero) => hero.first_appearance);

console.log(firstAppearance);

const dcComics = superheroes.filter((hero) => hero.publisher === "DC Comics");

console.log(dcComics);

const marvelComics = superheroes.filter(
  (hero) => hero.publisher === "Marvel Comics"
);

console.log(marvelComics);

//Weight map DC Comics + omzetten naar integer

const dcComicsWeight = dcComics.map((wght) => {
  //  console.log(wght.weight);
  const wghtInt = parseInt(wght.weight);
  return wghtInt;
});

console.log(
  "dit is de array met gewichten van DC Comics helden:",
  dcComicsWeight
);

//total weight DC Comics

const dcComicsTotalWeight = dcComicsWeight.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log("dit is het totaalgewicht van DC Comics:", dcComicsTotalWeight);

//Weight map Marvel Comics + omzetten naar integer

const marvelComicsWeight = marvelComics.map((wght) => {
  //  console.log(wght.weight);
  const wghtInt = parseInt(wght.weight);

  return wghtInt;
});

console.log(
  "dit is de array met gewichten van Marvel Comics helden:",
  marvelComicsWeight
);

//total weight Marvel Comics

const marvelComicsTotalWeight = marvelComicsWeight
  .slice(0, 7)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log(
  "dit is het totaalgewicht van Marvel Comics:",
  marvelComicsTotalWeight
);

//largest weight in array

const findLargestWeight = superheroes.map((wght) => {
  //  console.log(wght.weight);

  const wghtInt = parseInt(wght.weight);
  
  console.log("gewicht:", wghtInt);
  return wghtInt;
});

const largestWeight = findLargestWeight.reduce(function (a, b) {
  
  return Math.max(a, b);
});

// deze werkt wel

// let largest = 0;
// findLargestWeight.forEach((element) => {
//   if (largest < element) {
//     largest = element;
//   }
// });

console.log("the largest weight is: ", largestWeight);






