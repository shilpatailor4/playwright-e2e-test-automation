//Map, filter, and reduce
var nums = [1, 2, 3, 4, 5, 6];
var mappedArray = nums.map(function (num, index, array) {
    console.log(index);
    console.log(array);
    return num * 2;
});
console.log("Mapped array outpur", mappedArray);
var filteredArray = nums.filter(function (num) { return num % 2 == 0; });
console.log("Filterd array", filteredArray);
var reducedArray = nums.reduce(function (acc, num) { return acc + num; }); // 10+1 ==11 , 11+2 = 13, 13+3 , 16+4 , 20+5 , 25+6
console.log("reduced array output", reducedArray);
