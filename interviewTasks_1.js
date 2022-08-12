//Task 1

//Consecutive numbers, return true or false.
const testcases = [
  [5, 2, 3, 1, 4],
  [34, 23, 52, 12, 3],
  [7, 6, 5, 5, 3, 4],
];

const isConsecutive = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr[0] + arr.length - 1 === arr.at(-1)) return true;
  return false;
};

console.log(isConsecutive(testcases[0]));
console.log(isConsecutive(testcases[1]));
console.log(isConsecutive(testcases[2]));

//TASK 2
//Build right triangle to console.
const hashTriangle = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str += "#".repeat(i).padStart(n, " ") + "\n";
  }
  return str;
};

console.log(hashTriangle(4));

// TASK 3 v.2
//Find repeat numbers, and return their.
const testcases5 = [4, 2, 4, 5, 2, 3, 1];

const findRepeatingNums = (nums) => {
  const obj = {};
  const arr = [];
  nums.forEach((num) => {
    if (obj[num]) {
      obj[num]++;
      if (obj[num] > 1) {
        arr.push(num);
      }
    } else obj[num] = 1;
  });
  return arr;
};

console.log(findRepeatingNums(testcases5));

// TASK 5 v.1

// const testcases5 = [4, 2, 4, 5, 2, 3, 1];

// var findRepeatingNums1 = (nums) => {
//   const obj = {};
// 	const arr = [];
//   nums.forEach((num) => {
//     if (obj[num]) obj[num]++;
//     else obj[num] = 1;
//   });
// 	for(const [key,val] of Object.entries(obj)){
// 		if(val > 1)arr.push(key)
// 	}
// 	return arr;
// };

// console.log(findRepeatingNums1(testcases5));
