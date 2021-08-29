function merge(firstArr, secondArr) {
    //making a copy for each array to protect the integrity
    //of the original arrays
    let cpFirstArr = [...firstArr];
    let cpSecondArr = [...secondArr];
    let array = [];
    // construct a merged array until one of the arrays is empty
    while (cpFirstArr.length && cpSecondArr.length) {
        //add the smallest element among the arrays to the merged array
        if (cpFirstArr[0] < cpSecondArr[0]) array.push(cpFirstArr.shift());
        else array.push(cpSecondArr.shift());
    }
    
    //the leftovers (if they exist) will fit into the returned
    //array as a complete sorted array.
    return [ ...array, ...cpFirstArr, ...cpSecondArr ]
}

function mergeSort(array) {

    // return when the array is too small to divide further
    if(array.length <= 1){
        return array 
    }
    
    //separate half of the array at the middle
    const first = array.slice(0, array.length / 2)
    const second = array.slice(array.length / 2)
    //merge the two halves recursively
    return merge(mergeSort(first),mergeSort(second))
}

module.exports = { merge, mergeSort};