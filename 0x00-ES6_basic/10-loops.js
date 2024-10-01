export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const [idx, val] of array.entries()) {
    newArray[idx] = appendString + val;
  }

  return newArray;
}
