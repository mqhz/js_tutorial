(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports = Phrase;

//Reverse the string, But there is a catch, We are modifying the "String" object itself with reverse() method.
String.prototype.reverse = function reverse ()
{
return Array.from(this).reverse().join("");
}

//Defines a Phrase object.
function Phrase(content)
{
  this.content = content;

  //Provide an output of a String consist of only letters in that String.
  this.letters = function letters()
  {
  return (this.content.match(/[a-z]/gi) || []).join("");
  }

//Process the content by converting it to LowerCase.
this.processedContent = function processedContent()
{
return this.letters().toLowerCase();
}

//Check for palindrome.
this.palindrome = function palindrome()
{
  return this.processedContent() === this.processedContent().reverse();
}
}

},{}],2:[function(require,module,exports){
let Phrase = require("mqhz-palindrome");

let string = prompt("Please enter a sentence to find whether it is a palindrome");

let phrase = new Phrase(string);

if (phrase.palindrome()){
  alert(`"${phrase.content}" is a palindrome! :)`)
}
else {
  alert(`"${phrase.content}" is not a palindrome :(`)
}

},{"mqhz-palindrome":1}]},{},[2]);
