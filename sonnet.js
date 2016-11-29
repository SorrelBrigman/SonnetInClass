
// Take the contents of the sonnet div and place it in a variable
var theSonnet = document.getElementById("sonnet").innerHTML;
console.log(theSonnet);
// Find and output the starting position of the word "orphans"
console.log("the starting position of the word orphans: " + theSonnet.indexOf("orphans"));
// Output the number of characters in the sonnet
var numOfCharacters = theSonnet.length
console.log("the number of characters in the sonnet: " + numOfCharacters);
// Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = theSonnet.replace("winter", "yuletide");
console.log(newSonnet);
// Replace all occurances of the string "the" with "a large"
var largeSonnet = newSonnet.split(" the ").join(" a large ").split("The ").join("A large ");
console.log(largeSonnet);

// Set the content of the sonnet div with the new string

document.getElementById("sonnet").innerHTML = largeSonnet;