function checkCase(ch) {
   if (!isNaN(ch * 1)){
      return 'ch is numeric';
   }
    else {
      if (ch == ch.toUpperCase()) {
         return 'upper case';
      }
      if (ch == ch.toLowerCase()){
         return 'lower case';
      }
   }
}
console.log(checkCase('alfabet'))
console.log(checkCase('ALFABET'))
console.log(checkCase('1'))