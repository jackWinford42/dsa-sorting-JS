function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        //iterate over entire array
        for (let i = 0; i < array.length; i++) {
            //check if previous val is larger than current
            if (array[i] > array[i + 1]) {
                //swap if needed
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                //setting swapped to true initiates a verification
                //loop to make sure everything is in order.
                swapped = true; 
            }
        }
    } while (swapped);
    return array;
}

module.exports = bubbleSort;