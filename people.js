var people = [{name: "chas", age: 17}, {name: "nick", age: 43}, {name: "malcolm", age: 87}]

var numbers = [1, 2, 5, 7]

function addArray(array) {
  let total = 0;
  for (let i=0; i<array.length; i++){
    total = array[i] + total;
  }
  return total;
}

[1, 2, 3, 4].reduce((a, b) => {return a * b});

function checkEven () {
  n = number(n);
  return n === 0 || !!(n && (n%2));
}
