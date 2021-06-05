function isDual(arr: number[]): boolean {
  let x: number = arr.length;
  if (x % 2 !== 0) return false;
  let sum: number = arr[0] + arr[1];
  for (let i = 3; i < arr.length; i += 2) {
    if (arr[i - 1] + arr[i] !== sum) return false;
  }

  return true;
}
console.log(isDual([1, 2, 2, 1, 3, 0]));
console.log(isDual([1, 2, 3, 0]));
console.log(isDual([1, 1, 2, 2]));
