function sortArrays(array1, array2) { 

    if (array1.some(isNaN) || array2.some(isNaN)) {
        console.log("arrays container non-numerical values")
    } else {
        const combinedArray = array1.concat(array2)
        const sortedArray = combinedArray.sort()
        console.log(sortedArray)
    }
   
  }

sortArrays([1, 5, "A", 2], [9, 0, 2, 3])

sortArrays([1, 5, 8, 2], [9, 0, 2, 3])