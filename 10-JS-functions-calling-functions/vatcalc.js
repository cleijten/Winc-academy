//Exercise 1 - Function VAT calculation on a base price

const calcVat = function (percentage) {
  let vat = percentage / 100 + 1;
  return vat;
};

const pricewithVat = function (price, percentage) {
  let vatPerc = calcVat(percentage);
  let newprice = price * vatPerc;
  return newprice;
};

console.log(pricewithVat(2, 9));
console.log(pricewithVat(300, 21));
console.log(pricewithVat(5, 0));

//Exercise 2 - Return array with VAT amount and baseprice

const calcBaseprice = function (newprice, percentage) {
  let vatPerc = calcVat(percentage);
  let baseprice = newprice / vatPerc;
  let vatAmount = newprice - baseprice;
  return [baseprice, vatAmount];
};

console.log(calcBaseprice(2.18, 9));
console.log(calcBaseprice(1210, 21));
console.log(calcBaseprice(50, 0));
