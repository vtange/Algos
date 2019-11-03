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
		});

		it('should replace 5 if I add 3', function() {
			heap.add(3);
			expect(heap.root.value).to.equal(3);
		});

		it('root should still be 3 if I add 4', function() {
			heap.add(3);
			heap.add(4);
			expect(heap.root.value).to.equal(3);
		});

		it('you can get 5 after adding 3 and 4', function() {
			heap.add(3);
			heap.add(4);
			expect(heap.get(5).value).to.equal(5);
		});
	});

	describe('Big Heap', function() {

		before(function() {
			heap = new BinaryHeap();
			heap.add(5);
			heap.add(50);
			heap.add(500);
			heap.add(5000);
			heap.add(50000);
			heap.add(500000);
			heap.add(5000000);
			heap.add(50000000);
			heap.add(1000000);
			heap.add(100000);
			heap.add(10000);
			heap.add(1000);
			heap.add(100);
		});

		it('should have 5 as root', function() {
			expect(heap.root.value).to.equal(5);
		});
		it('you can get 500k', function() {
			expect(heap.get(500000).value).to.equal(500000);
		});
		it('you can get an array of BFS travelled values', function() {
			expect(heap.record([]).length).to.equal(13);
		});
		it('you can get an array of BFS travelled values', function() {
			console.log(heap.recorddfs([]));
		});
	});
});
