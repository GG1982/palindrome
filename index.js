
// Reverse order of a string
function reverse(string) {
  // return string.split("").reverse().join("");
  // The above won't work on complex characters such as emojis
  // as they are 2 characters.
  // Instead we create an arrary from a string using Array.from():
  //  Array.from('honey badger');
  //  [ 'h', 'o', 'n', 'e', 'y', ' ', 'b', 'a', 'd', 'g', 'e', 'r' ]
  return Array.from(string).reverse().join("");
}


// Define a Phrase object
function Phrase(content) {
  this.content = content;

  this.louder = function() {
    return this.content.toUpperCase();
  };

  // Returns Lower Case
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content)
  }

  // Check if string is a palindrome. Will return true or false.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}


// returns any string in reverse order e.g "cat" -> "tac"
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// returns true if string is a palindrome
String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

// Returns true if string is empty or only whitespace/s.
String.prototype.blank = function() {
  return !!(this.match(/^\s*$/))
}

// returns the last element of an array
Array.prototype.last = function() {
  return this.slice(-1)[0];
}
