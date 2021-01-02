export { };
let arr: number[] = Array(5).fill(1);

console.log(arr);

const iterator = arr.values();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); //undefined