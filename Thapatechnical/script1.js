// Strings in Javascript


// A Javascript string is zero or more characters written inside quotes. Javascript strings are used for storing and  manipulating text. You can use single or double quotes. Strings can be created as primitives, from string literals, or as objects,  using the String() constructor.



var myName = "vinod thapa";
let myChannelName = 'vinod thapa';

let ytName = new String("Thapa Technical"); // using new String() to form a string constructor, it will give you an array.

console.log(myName)
console.log(ytName)


// How to find the length of a string.

// String.prototype.length, it reflects the length of the string

console.log(myName.length);



// Escape Characters.

let anySentence = "We are the so-called \"Vikings\" from the north";
console.log(anySentence);




// Finding a string in a string.

// The indexOf() method returns the index of (the position of ) the first occurence of a specified text in a string and gives -1 if it is not found.

const myBioData = 'I am the Thapa Technical';
console.log(myBioData.indexOf("Thapa"))
console.log(myBioData.indexOf('am'));
console.log(myBioData.indexOf('T', 6));



// String.prototype.lastIndexOf(searchValue, [, from Index]) returns the index within the calling String object of the last occurence of the searchValue or -1 if not found. BackWard Search

console.log(myBioData.lastIndexOf("t", 6));
 // it will start from index 6, backward searching, the output is 5.




// Searching for a String in a String.
// String.prototype.search(regex)
// The search( method ) searches a string for a specified value and returns the position of the match.   The search() method cannot take a second start position argument unlike indexOf, lastIndexOf, it can only take one arguments.

let sData = myBioData.search('Thapa');
console.log(sData);






// Extracting String Parts


// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method , slice() extracts a part of a string and returns the extracted part in a new string. It takes 2 parameters : the start position, and the end position (end not included).

// The slice () method selects the elements starting at the given start argument, and ends at, but does not include, the given end

var str = "Apple, Banana, Kiwi, mango";

//let res = str.slice(0, 4);
let res = str.slice(7, -2); // will start with index 7 and will exclude 2 characters from the last position index.
console.log(res);




// Challenges

// 1. Display only 280 character of a string like the one used in Twitter?

let myTweets =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  let myActualTweet = myTweets.slice(0, 280);
  console.log(myActualTweet);
  console.log(myActualTweet.length);













  // The substring() Method.
  // substring() is similar to slice().
  //The difference is that substring cannot accept negative indexes. If we give negative value then the character will counted from the 0th position.

//   let response = str.substring(0, 4);
//   console.log(response); // Appl

  let response = str.substring(7, -2) // it will 0th position till the 7th index, removing last 2 characters due to -2 in the parameter.
  console.log(response); // Apple,




  // The substr() Method.

  // substr() is similar to slice().
  // The difference is that the second parameter specifies the length of the extracted part.

  // let subStrResponse = str.substr(0,4);
  // console.log(subStrResponse); // Appl

  //let subStrResponse = str.substr(7, -2); // when negative value is added in substr parameter in (7, -2), it will not give you any output
  let subStrResponse = str.substr(-4); // ango
  console.log(subStrResponse);






//  Replacing String Content()

// String.prototype.replace(searchFor, replaceWith).

// The replace() method replaces a specified value with another value in a string.
// The replace() method does not change the string. It returns a new string. By default, the replace() method only replaces the first match.

let myData = " I am patwari pathan bengali";
let replaceData = myData.replace('bengali', 'afghani');
console.log(replaceData);
console.log(myData);












// Extracting String Characters

// There are 3 methods for extracting string characters:
// charAt(position)
// charCodeAt(position)
// Property access []




// The charAt() Method
// The charAt() method returns the character at a specified index (position) in a string.

let myString = "HELLO WORLD";


console.log(myString.charAt(0));
// H
console.log(myString.charAt(9)); // L
  


// The charCodeAt() Method
// The charCodeAt() method returns the unicode of the character at a specified index in a string.
// The method returns a  UTF-16 code (an integer between 0 and 6553).

// The Unicode Standard provides a unique number for every character, no matter the platform, device, application or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.

let MyStr = "Hello World";
console.log(MyStr.charCodeAt(0)); // 72








// Challenge time

// Return the Unicode of the last character in a string.

let exampleString = "HELLO WORLD";
let lastChar = exampleString.length;
console.log(lastChar); // 11
console.log(exampleString.charCodeAt(lastChar - 1)); // 68






// Property Acess
// ECMAScript 5 (2009) allows property access [] on string.


let strPropertyAcess = "HELLO WORLD";
console.log(strPropertyAcess[0]); // H
console.log(strPropertyAcess[1]); // E







// Other Useful Methods

console.log(myName.toUpperCase()); // VINOD THAPA
console.log(myName.toLowerCase()); // vinod thapa




// The concat() Method
// concat() joins two or more strings.

let fName = 'Nadia';
let lName = 'Islam';

console.log(fName.concat(lName)); // NadiaIslam
console.log(fName.concat(" ", lName)); // Nadia Islam
console.log(`${fName} ${lName}`); // Nadia Islam








// String.trim()
// The trim() method removes white spaces from both sides of a string.

let trimExample = "             Hello World";
console.log(trimExample.trim());







// Converting a String to an Array.
// A string can be converted to an array with the split() method


let txt = "a,b,c|d e";
console.log(txt.split(",")); // split on comma
console.log(txt.split(" ")); // split on spaces
console.log(txt.split('|')); // split on 'pipe'





