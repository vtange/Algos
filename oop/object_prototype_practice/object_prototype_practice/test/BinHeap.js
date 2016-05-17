describe('Binary Heap', function() {

	verifyClass(BinaryHeap).followsPattern('pseudoclassical', {}, false);

	beforeEach(function() {
		heap = new BinaryHeap();
	});

	it('should be empty from the start', function() {
		expect(heap.content).to.deep.equal([]);
	});

});
