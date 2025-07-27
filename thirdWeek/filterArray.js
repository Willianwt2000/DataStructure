function filter(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const shouldInclude = fn.length === 1 ? fn(arr[i]) : fn(arr[i], i);
    if (shouldInclude) { 
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}