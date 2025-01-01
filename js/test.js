import { randomNumbersTo5, randomNumbersTo100 } from "./alghortims.js";
const arr = "salom salom dunyo qalselar";
const uniqueLetter = (str) => {
  const words = str.split(' '); 
  const wordCount = {};


  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });


  return words.filter(word => wordCount[word] === 1);
};

console.log(uniqueLetter(arr));
