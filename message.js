import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin} from './messageMixer.js'
let str = "What is the color of the sky?"
function displayMessage() {
  let str = "What is the color of the sky?";
  console.log(countCharacter(str, "p"));
  console.log(capitalizeFirstCharacterOfWords(str));
  console.log(reverseWord(str));
  console.log(reverseAllWords(str));
  console.log(replaceFirstOccurence(str, "sky", "water"));
  console.log(encode(str));
  console.log(pigLatin(str, 'ay'));
  console.log(palindrome(str));
  
}

displayMessage();