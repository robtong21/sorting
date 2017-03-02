function bubbleSort(arr) {
    if (!arr.length) {
        return [];
    }
    if (arr.length === 1) {
        return arr;
    }
    let holder, newLength;
    for (var j=arr.length; j>0; j--) {
        // debugger
        for (var i=0; i<arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                holder = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = holder;
            }
            
        }
    }
    return arr;
}