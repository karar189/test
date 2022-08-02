const number = new Array(2, 4, 7, 6, 6, 6, 5, 8, 9);
console.log(number.sort((a, b) => a - b)); // Ascending order
console.log(number.reverse()); // decending order
document.getElementById("first").innerHTML = number.sort((a, b) => a - b);
document.getElementById("second").innerHTML = number.reverse();

//for boolean values
var arr = [3, 1, 2, true];
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "boolean") {
    const arr1 = arr.splice(i, 1);
  }
}

arr.sort((a, b) => a - b);
document.getElementById("third").innerHTML = arr.reverse();
