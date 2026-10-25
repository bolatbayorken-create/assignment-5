const fullName = "Ayazhan";
let age = 19;
const isStudent = true;
let favoriteColor = "blue";

console.log("--- Task 6 ---");
console.log("fullName:", fullName, "| type:", typeof fullName);
console.log("age:", age, "| type:", typeof age);
console.log("isStudent:", isStudent, "| type:", typeof isStudent);
console.log("favoriteColor:", favoriteColor, "| type:", typeof favoriteColor);

favoriteColor = "green";
console.log("Updated favoriteColor:", favoriteColor);


console.log("\n--- Task 7 ---");
const userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

const group = "MT-25033";
const greetingMessage = `Student: ${fullName}, Group: ${group}`;
console.log(greetingMessage);


console.log("\n--- Task 8 ---");
const num1String = prompt("Enter the first number (e.g. 12):");
const num2String = prompt("Enter the second number (e.g. 5):");

const num1 = Number(num1String);
const num2 = Number(num2String);

console.log("Sum (+):", num1 + num2);
console.log("Difference (-):", num1 - num2);
console.log("Product (*):", num1 * num2);
console.log("Quotient (/):", num1 / num2);
console.log("Remainder (%):", num1 % num2);


console.log("\n--- Task 9 ---");
const myNameString = "Ayazhan Student";

console.log("Length (.length):", myNameString.length);
console.log("Uppercase:", myNameString.toUpperCase());
console.log("Lowercase:", myNameString.toLowerCase());
console.log("First 3 chars (.slice(0, 3)):", myNameString.slice(0, 3));

const part1 = "I am developing the";
const part2 = "Weekly Meal Plan page for CookFromHome.";
console.log("Combined sentence:", part1 + " " + part2);


console.log("\n--- Task 10 ---");
let counter = 10;
console.log("Start counter:", counter);

counter++;
console.log("After counter++:", counter);

counter--;
console.log("After counter--:", counter);

counter += 5;
console.log("After counter += 5:", counter);

counter -= 3;
console.log("After counter -= 3:", counter);

counter *= 2;
console.log("After counter *= 2:", counter);

counter /= 4;
console.log("After counter /= 4:", counter);


console.log("\n--- Task 11 ---");
function calculateDogAge(dogAge) {
  const humanAge = (dogAge - 2) * 4 + 21;
  console.log(`Dog age ${dogAge} years is equal to ${humanAge} human years.`);
}

calculateDogAge(2);
calculateDogAge(5);


console.log("\n--- Task 12 ---");

function greetUser(name) {
  console.log(`Welcome, ${name}!`);
}
greetUser("Ayazhan");
greetUser("Orken");

function calculateSum(a, b) {
  return a + b;
}
console.log("calculateSum(10, 20):", calculateSum(10, 20));
console.log("calculateSum(7, 3):", calculateSum(7, 3));

function calculateRectangleArea(width, height) {
  return width * height;
}
console.log("Rectangle area (5x10):", calculateRectangleArea(5, 10));
console.log("Rectangle area (3x8):", calculateRectangleArea(3, 8));