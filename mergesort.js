function splitArray(arr) {

  /* your code here to define the firstHalf and secondHalf arrays */

  var middle = Math.floor(arr.length / 2);

  var firstHalf = arr.slice(0, middle);
  var secondHalf = arr.slice(middle);

  return [firstHalf, secondHalf];
}



function merge(arr1, arr2){
	var merged = [];
	while (arr1.length && arr2.length){

		if (arr1[0] < arr2[0]){
			merged.push(arr1.shift())
		} else {
			merged.push(arr2.shift());
		}
	}
	while (arr1.length){
		merged.push(arr1.shift());

	}
	while (arr2.length){
		merged.push(arr2.shift());

	}
	return merged;
}


function mergeSort(arr) {
	if (arr.length ===1){
		return arr;
	} else {
		var [left, right] = splitArray(arr);
		return merge(mergeSort(left), mergeSort(right));
	}
}





