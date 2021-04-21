function sortArrays(array1, array2) {
    const combinedArray = array1.concat(array2)
    console.log(combinedArray)
    const sortedArray = combinedArray.sort()
    console.log(sortedArray)
  }
  
  sortArrays([1,5,6,2], [9,0,2,3])