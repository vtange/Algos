describe('Binary Heap', function() {

	describe('Basic', function() {

		beforeEach(function() {
			heap = new BinaryHeap();
		});

		it('should be empty from the start', function() {
			expect(heap.root).to.equal(null);
		});

		it('you can add items', function() {
			heap.add(5);
			expect(heap.root.value).to.equal(5);
		});

	});

	describe('Heapifying', function() {

		beforeEach(function() {
			heap = new BinaryHeap(5);
		});

		it('should start with 5 as root', function() {
			expect(heap.root.value).to.equal(5);
		});

		it('should not replace 5 if I add 6', function() {
			heap.add(6);
			expect(heap.root.value).to.equal(5);
			expect(heap.content[1].value).to.equal(6);
		});

		it('should replace 5 if I add 3', function() {
			heap.add(3);
			expect(heap.root.value).to.equal(3);
			expect(heap.content[1].value).to.equal(5);
		});
		
		it('should replace 5 if I add 3', function() {
			heap.add(3);
			heap.add(4);
			expect(heap.root.value).to.equal(3);
			expect(heap.content[1].value).to.equal(4);
			expect(heap.content[2].value).to.equal(5);
		});

		it('you can get 5 after adding', function() {
			heap.add(3);
			heap.add(4);
			expect(heap.get(5).value).to.equal(5);
		});
	});

	describe('Big Heap', function() {

		beforeEach(function() {
			heap = new BinaryHeap(59);
			heap.add(103);
			heap.add(420);
			heap.add(200);
			heap.add(4255110);
			heap.add(50);
		});

		it('should start with 50 as root', function() {
			expect(heap.root.value).to.equal(50);
		});

		it('4255110 should be last', function() {
			expect(heap.content[5].value).to.equal(4255110);
		});
	});
});
