import { randomNumbersTo5, randomNumbersTo100 } from "./alghortims.js";
const arr = "salom dunyo qalselar"
const sortWordsAlphabetically = (str) => {
  return str
    .split(" ") 
    .sort((a, b) => a.localeCompare(b)); 
};

console.log(sortWordsAlphabetically(arr));
