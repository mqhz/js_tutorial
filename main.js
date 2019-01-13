let Phrase = require("mqhz-palindrome");

let string = prompt("Please enter a sentence to find whether it is a palindrome");

let phrase = new Phrase(string);

if (phrase.palindrome()){
  alert(`"${phrase.content}" is a palindrome! :)`)
}
else {
  alert(`"${phrase.content}" is not a palindrome :(`)
}
