describe('Split Array function', function() {
	//if array is empty, one item etc...... create spec!


	console.log(this);
  it('is able to split an array into two halves', function() {
    // your code here 
    expect(splitArray([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

  it('splits an array with an odd number length into two nearly equal parts', function(){
  	expect(splitArray([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });

});

 
//if only 1 arr, or empty etc... write specs....

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,3], [2,4,5])).toEqual([1,2,3,4,5]);
  });
});


describe('Merge Sort', function(){
	it('sorts an array with an odd-numbered length', function(){
		expect(mergeSort([6,4,5,3,9,2,1,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
	});
});