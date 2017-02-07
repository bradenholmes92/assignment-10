
/**
 * Ex : isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

var isPalindrome = function (string){

  var trueFalse = false
  var turnItAround = ''

  for(var i = string.length-1; i>=0; i=i-1){
    turnItAround = turnItAround + string[i]
  }if (string === turnItAround) {
    //return true
    trueFalse = true
  }//else {
    //return trueFalse
  //}
  return trueFalse
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
