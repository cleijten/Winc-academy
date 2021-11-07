// const number = 5;

// // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const ditIsEenPromise = new Promise((resolve, reject) => {
//   if (number > 10) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const testNum = () => {
//   ditIsEenPromise
//     .then(function () {
//       console.log("het getal is hoger dan 10");
//     })
//     .catch(function () {
//       console.log("het getal is niet hoger dan 10");
//     });
// };

// testNum();

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const sortWords = (array) => {
  array.sort();
  console.log(array);
  return array;
 
}

const makeAllCaps = (array) => {
  console.log(array);
  const uppercased = array.map((item) => item.toUpperCase());
  console.log("met hoofdletters:", uppercased);
  return uppercased;
};

const myPromise = new Promise((resolve, reject) => {
  const every = arrayOfWords.every((item) => typeof item === "string");
  console.log(every);
  if (every) {
    resolve();
  } else {
    reject("array is fout");
  }
});

myPromise
   .then((t) => {
    sortWords(arrayOfWords);
  })
  .then((f) => {
    makeAllCaps(arrayOfWords);
  })
  .catch((msg) => {
    console.log("array contains invalid elements");
  });



