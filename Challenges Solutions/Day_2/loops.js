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

function check1(a){
        switch (a) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(a)
                break
            default:
                break;       
        }

    }
function check2(b){
        switch (b) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                break
            default:
                console.log(b)      
        }

    }

function vowelsAndConsonants(s) {
   
    for(var a of s){
        check1(a)
    }
    for(var b of s){
        check2(b)
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}