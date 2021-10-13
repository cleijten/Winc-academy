//Function Hey Kiddo

const checkAdult = function (age) {
  
  if (age >= 18) {
    // console.log("leeftijd is boven 18");
    return true;
  } else {
    // console.log("leeftijd is onder 18");
    return false;
  }
};

const msgAdult = function (age) {
  
  let checkAdultAge = checkAdult(age);
  // console.log(checkAdultAge);
  if (checkAdultAge === true) {
    return "Hello there";
  } else {
    return "Hey kiddo";
  }
};

console.log(msgAdult(19));





