'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getSecondLargest(nums) {
    // Complete the function
    nums = nums.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})
    // console.log(nums)
    var a = Math.max(...nums)
    // console.log(nums.indexOf(a))
    var i = nums.indexOf(a)
    return nums[i-1]
    
    }
    


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}