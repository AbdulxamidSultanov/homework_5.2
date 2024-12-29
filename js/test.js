const randomNumbers = (a) => {
  const arr = [];
  for(let i = 0; i < a; i++){
    arr.push(Math.trunc(Math.random() * 200 - 100));
  }
  return arr;
};
const arr4 = randomNumbers(10)
console.log(arr4)
arr4.forEach(arr => {
    const res = arr4.pop()
    let res2 = res.push(arr)
})

console.log(res)