export function randomNumbersTo100(a) {
  const arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(Math.trunc(Math.random() * 200 - 100));
  }
  return arr;
}

export function randomNumbersTo5(a) {
  const arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(Math.trunc(Math.random() * 5));
  }
  return arr;
}
