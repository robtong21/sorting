describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles single item', function() {
    expect( bubbleSort([1])).toEqual( [1]);
  });
  
  it('handles multiple items in order', function() {
      expect( bubbleSort([1,2,3])).toEqual( [1,2,3]);
  })

  it('handles multiple unordered numbered items', function() {
      expect( bubbleSort([3,14,2,1,6,8,20])).toEqual( [1,2,3,6,8,14,20]);
  })
  
  it('handles multiple unordered alpha items', function() {
      expect( bubbleSort(['z','r', 'q','a'])).toEqual( ['a','q','r','z']);
  })

  it('handles multiple unordered alpha words', function() {
      expect( bubbleSort(['zoo','rabbit', 'query','alpha'])).toEqual( ['alpha','query','rabbit','zoo']);
  })

  it('handles multiple unordered mixed items', function() {
      expect( bubbleSort([70, 'z', 1,'r', 14, 'q','a'])).toEqual( [1,14,70,'a','q','r','z']);
  })

});
