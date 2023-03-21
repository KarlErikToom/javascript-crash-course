/*Exercise 1:
Write a JavaScript program to check two numbers and return true if one of the number is
100 or if the sum of the two numbers is 100

Exercise 2:
Write a JavaScript exercise to get the extension of a filename.

Exercise 3:
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet

Exercise 4:
Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

Exercise 5:
Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));