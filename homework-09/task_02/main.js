'use strict';


let mergeArrays = (arr) => {

    let mergedArrays = arr.flat(Infinity);
    let set = new Set(mergedArrays);
    return set;
    
}

console.log(mergeArrays([[1, 2], [2, 2, 3], [1, 1, 2, 4]]));
console.log(mergeArrays([[1, 2, 3 ,4, 5], [5, 6]]));
