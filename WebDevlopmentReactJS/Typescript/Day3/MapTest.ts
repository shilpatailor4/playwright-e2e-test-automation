//Map, filter, and reduce

let nums: Array<number> = [1, 2, 3, 4, 5, 6];
let mappedArray = nums.map((num, index, array) => {
  console.log(index);
  console.log(array);
  return num * 2;
});
console.log("Mapped array outpur", mappedArray);

let filteredArray = nums.filter((num) => num % 2 == 0);
console.log("Filterd array", filteredArray);

let reducedArray = nums.reduce((acc, num) => acc + num); // 10+1 ==11 , 11+2 = 13, 13+3 , 16+4 , 20+5 , 25+6
console.log("reduced array output", reducedArray);
