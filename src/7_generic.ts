const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const arrayOfStrings: Array<string> = ["hi", "Max"];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
