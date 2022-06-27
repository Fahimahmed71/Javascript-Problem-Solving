// 1) write 3 variable
var number = 10;
var string = "name";
var boolian = true;

// 2) 2 variable (let, const)
let phone = ["samsung", "poco", "apple"];
const shop = [
  { name: "cloth", price: 550, quantity: 5 },
  { name: "phone", price: 20000, quantity: 1 },
];

// 3) write 2 variable (+ - * / %)
const num1 = 72;
const num2 = 68;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 4) comparison 2 variable (small, big, equal, not equal, small or equal, big or equal)
const num3 = 148;
const num4 = 102;

if (num3 < num4) {
  console.log("small");
} else if (num3 > num4) {
  console.log("big");
} else if (num3 === num4) {
  console.log("equal");
} else if (num3 !== num4) {
  console.log("not equal");
} else if (num3 <= num4) {
  console.log("small or equal");
} else {
  console.log(" big or equal");
}

// 5) write two condition {case-1: fullfill both condition} {case-2: fullfill at least one condition}
const phoneprice1 = 35000;
const phoneprice2 = 40000;

if (phoneprice1 <= 50000 && phoneprice2 <= 50000) {
  console.log("I will buy the phone");
} else if (phoneprice1 >= 50000 || phoneprice2 >= 50000) {
  console.log("I will not buy the phone");
}

// 6) if-else condition
const raning = false;

if (raning === true) {
  console.log("bring umbrella");
} else {
  console.log("don't need unbrella");
}

// 7) while loop 7 to 19 all number.... only display odd number between 7 to 19
num5 = 7;

// while (num5 <= 19) {
//   console.log(num5);
//   num5++;
// }

i = 7;

while (i <= 19) {
  if (i % 2 !== 0) {
    console.log(i);
  } else {
    console.log("");
  }
  i++;
}

// 8) declare an array.. show number of element... update or change 4th position element... add or remove element...check whether a specific value exisits in the array

const arr = ["Javascript", "C++", "Python", "C#", "Ruby", "Java", "Rust"];

console.log("number of EL is", arr.length);

arr.splice(4, 0, "C");
console.log(arr);

arr.push("Parl");
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.includes("C"));

// 9) for loop to display element array
const arrLoop = ["abc", "def", "ghi"];

for (let i = 0; i < arrLoop.length; i++) {
  console.log(arrLoop[i]);
}

// 10) you have an array of number. display only the number bigger than 80
const arrnum = [10, 90, 80, 40, 110, 2, 79, 43, 100];
const n = 80;

for (let i = 0; i < arrnum.length; i++) {
  if (arrnum[i] >= n) {
    console.log(arrnum[i]);
  } else {
  }
}

// 11) write a function that take three num & return the multiplication of the three number
function multiplication(num1, num2, num3) {
  const numMulti = num1 * num2 * num3;

  return numMulti;
}

const multiEl = multiplication(5, 30, 45);
console.log(multiEl);

// 12) declare an object & change any property of that object
const obj = {
  id: 1,
  name: "Abc",
  born: 1996,
  age: 54,
  eyeColor: "blue",
};

obj.name = "def";
console.log(obj);
