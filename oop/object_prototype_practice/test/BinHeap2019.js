describe('Binary Heap', function() {

	describe('Basic functionality', function() {

		beforeEach(function() {
			tree = new BinaryHeap();
		});

		it('should be empty from the start', function() {
			expect(tree._root).to.equal(null);
		});

		it('you can insert items', function() {
			tree.insert(5);
			expect(tree._root.value).to.equal(5);
		});

	});

	describe('Max Heap', function() {

		before(function() {
			tree = new BinaryHeap();
			tree.insert(12);
			tree.insert(122);
		});

		it('maxHeap property should be default true', function() {
			expect(tree.maxHeap).to.equal(true);
		});
		it('root should be 122', function() {
			expect(tree._root.value).to.equal(122);
		});
		it('root left should be 12', function() {
			expect(tree._root.left.value).to.equal(12);
		});
		it('root should be 1222 after inserting 1222', function() {
			tree.insert(1222);
			expect(tree._root.value).to.equal(1222);
		});
		it('30 should displace 12', function() {
			tree.insert(30);
			expect(tree._root.left.value).to.equal(30);
		});
		it('24 should be child of 30', function() {
			tree.insert(24);
			expect(tree._root.left.right.value).to.equal(24);
		});
		it('200 should displace 122 and 122 should be left child of 200', function() {
			tree.insert(200);
			expect(tree._root.right.value).to.equal(200);
			expect(tree._root.right.left.value).to.equal(122);
		});

		it('extract should be 1222, heap integrity intact', function() {
			var a = tree.extractMax();
			expect(a).to.equal(1222);
			expect(tree._root.value).to.equal(200);
			expect(tree.integrityCheck()).to.equal(true);
		});
	});

	describe('Min Heap', function() {

		before(function() {
			tree = new BinaryHeap();
			tree.maxHeap = false;
			tree.insert(12);
			tree.insert(122);
		});

		it('maxHeap property should be default true', function() {
			expect(tree.maxHeap).to.equal(false);
		});
		it('root should be 12', function() {
			expect(tree._root.value).to.equal(12);
		});
		it('root left should be 122', function() {
			expect(tree._root.left.value).to.equal(122);
		});
		it('root should be 1 after inserting 1', function() {
			tree.insert(1);
			expect(tree._root.value).to.equal(1);
		});
		it('6 should displace 12', function() {
			tree.insert(6);
			expect(tree._root.left.value).to.equal(6);
		});
		it('7 should be child of 6', function() {
			tree.insert(7);
			expect(tree._root.left.right.value).to.equal(7);
		});
		it('200 should pass 12 and be left child of 12', function() {
			tree.insert(200);
			expect(tree._root.right.value).to.equal(12);
			expect(tree._root.right.left.value).to.equal(200);
		});

		it('extract should be 1, heap integrity intact', function() {
			var a = tree.extractMax();
			expect(a).to.equal(1);
			expect(tree._root.value).to.equal(6);
			expect(tree.integrityCheck()).to.equal(true);
		});
	});

});
