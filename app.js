//1=============================================
function reverseString(input) {
    let letters = "";
    let digits = "";

    for (let i = 0; i < input.length; i++) {
        let c = input.charAt(i);
        if (isNaN(c)) {
            letters += c; 
        } else {
            digits += c;  
        }
    }

    let reversedLetters = letters.split('').reverse().join('');
    let result = reversedLetters + digits;

    return result;
}

let input = "NEGIE1";

console.log("Hasil 1: " + reverseString(input));

//2=============================================
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = findLongestWord(sentence);

console.log("Hasil 2: Kata terpanjang: " + longestWord + ": " + longestWord.length + " karakter");

//3=============================================
function countQueryOccurrences(input, query) {
    let inputMap = {};
    let result = new Array(query.length).fill(0);
    input.forEach(word => {
        if (inputMap[word]) {
            inputMap[word]++;
        } else {
            inputMap[word] = 1;
        }
    });
    query.forEach((word, index) => {
        result[index] = inputMap[word] || 0;
    });

    return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const result = countQueryOccurrences(INPUT, QUERY);

console.log("Hasil 3: " + result.join(" ")); 

//4=============================================
function diagonalDifference(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i]; 
        secondaryDiagonal += matrix[i][matrix.length - 1 - i]; 
    }
    
    return primaryDiagonal - secondaryDiagonal;
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Hasil 4: Selisih diagonal:", diagonalDifference(matrix));