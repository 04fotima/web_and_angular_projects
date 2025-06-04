
const myArray = ["apple", "banana", "cherry", "date", "lemon"];


const outputDiv = document.getElementById("output");
outputDiv.innerHTML += "<h2>Ex1</h2>";
outputDiv.innerHTML += "<p>First : " + myArray[0] + "</p>";
outputDiv.innerHTML += "<p>Last : " + myArray[myArray.length - 1] + "</p>";
outputDiv.innerHTML += "<p> toString: " + myArray.toString() + "</p>";
outputDiv.innerHTML += "<p> join: " + myArray.join(", ") + "</p>";


outputDiv.innerHTML += "<h2>Ex2</h2>";
myArray.pop();
outputDiv.innerHTML += "<p>pop: " + myArray + "</p>";
myArray.push("fig"); 
outputDiv.innerHTML += "<p>push: " + myArray + "</p>";


outputDiv.innerHTML += "<h2>Ex3</h2>";
myArray.shift(); 
outputDiv.innerHTML += "<p>shift: " + myArray + "</p>";
myArray.unshift("grape"); 
outputDiv.innerHTML += "<p>unshift: " + myArray + "</p>";


outputDiv.innerHTML += "<h2>Ex4</h2>";
myArray.splice(2, 2, "kiwi", "lemon"); 
outputDiv.innerHTML += "<p>splice: " + myArray + "</p>";


outputDiv.innerHTML += "<h2>Ex5</h2>";
const anotherArray = ["mango", "orange"];
const mergedArray = myArray.concat(anotherArray); 
outputDiv.innerHTML += "<p>Merged: " + mergedArray + "</p>";


outputDiv.innerHTML += "<h2>Ex6</h2>";
const numberArray = [5, 2, 8, 1, 9];


numberArray.sort((a, b) => a - b); 
outputDiv.innerHTML += "<p>Sorted asc: " + numberArray + "</p>";


numberArray.sort((a, b) => b - a); 
outputDiv.innerHTML += "<p>Sorted des: " + numberArray + "</p>";


outputDiv.innerHTML += "<h2>Ex7</h2>";
outputDiv.innerHTML += "<p>Max: " + Math.max(...numberArray) + "</p>";
outputDiv.innerHTML += "<p>Mini: " + Math.min(...numberArray) + "</p>";