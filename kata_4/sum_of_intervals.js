// function sumIntervals(arr) {
//   let sum = 0;
//   const newArr = [];
//   const scope = [];
//   arr.forEach((ar) => {
//     let [el1, el2] = ar;
//     if (newArr.length) {
//       if (newArr.at(-1) > el1 && newArr.at(-1) < el2) {
//         newArr.pop();
//         newArr.push(el2);
//       } else {
//         // sum += el2 - el1;
//         // console.log("---",sum);
//         scope.push(ar);
//       }
//     } else {
//       newArr.push(el1);
//       newArr.push(el2);
//     }
//   });
// 	if(scope.length){
// 		scope.forEach(ar => {
// 			[el1, el2] = ar;
// 			if (newArr.at(-1) > el1 && newArr.at(-1) < el2){
// 				newArr.pop();
//         newArr.push(el2);
// 			}else{
// 				sum += el2 - el1;
// 			}
// 			scope.pop()
// 		})
// 	}
// 	console.log(scope);

//   console.log(sum + newArr[1] - newArr[0]);
// }

// function sumIntervals(arr) {
//   let sum = 0;
//   const newArr = [];
//   arr.sort((a, b) => a[1] - b[1]);
//   let [el1, el2] = arr.shift();
//   arr.forEach((ar) => {
//     if (el2 > ar[0] && el2 < ar[1]) {
//       el2 = ar[1];
//     } else {
//       newArr.push([ar[0], ar[1]]);
//     }
//   });

//   newArr.forEach((ar, ind, arr) => {

//     if (ar[1] > el2) {
//       sum += ar[1] - ar[0];
//     }
//   });

//   console.log(sum + el2 - el1);
// }

function sumIntervals(arr) {
  const sortArr = [...arr].sort((a, b) => a[1] - b[1]);
  let [el1, el2] = [0, 0];

  function fun1(array) {
    const newArr = array.map((ar) => ar[1]);
  }
  return fun1(sortArr);
}

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // => 9
console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); // => 7

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
); // => 19

// sumIntervals([
//   [1, 5],
//   [1, 5],
// ]); // => 4
