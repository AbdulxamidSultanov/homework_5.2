export default function randomNumbers(a) {
  const arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(Math.trunc(Math.random() * 100 - 200));
  }
  return arr;
};
let res = randomNumbers(12);
console.log(res);

