const randomNumbers = (a) => {
  const arr = [];
  for(let i = 0; i < a; i++){
    arr.push(Math.trunc(Math.random() * 200 - 100));
  }
  return arr;
};
const arr1 = randomNumbers(100)
console.log(arr1)
let res = arr1.filter(arrNumbers => {
    if(arrNumbers % 2 == 0){
        return arrNumbers
    }
})

console.log(res)