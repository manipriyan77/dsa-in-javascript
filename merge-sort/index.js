// Steps
// Splitting
// merging
// sorting

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  console.log('merge(left,right) :>> ', merge(left, right));
  return merge(left, right);

  //   mergeSort()
}

function merge(arr1, arr2) {
  const results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  if (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

mergeSort([324, 234, 2542434, 254, 2434, 324, 634, 5, 436, 35543]);
