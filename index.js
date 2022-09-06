function isPalindrome(word) {
  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

    return true
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  looping through the string
  check if last element is not or = element at beginning
  if elements do not match return false
  else return true
  increment start
  decrement end
*/

/*
  Add written explanation of your solution here
  creating a function the helps the user input a word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
