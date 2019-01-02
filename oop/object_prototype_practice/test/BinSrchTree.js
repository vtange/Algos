describe('Binary Search Tree', function() {

	describe('Basic functionality', function() {

		beforeEach(function() {
			tree = new BinarySearchTree();
		});

		it('should be empty from the start', function() {
			expect(tree._root).to.equal(null);
		});

		it('you can add items', function() {
			tree.add(5);
			expect(tree._root.value).to.equal(5);
		});

	});

	describe('Orders things lowest leftwards, highest rightwards', function() {

		before(function() {
			tree = new BinarySearchTree();
			tree.add(5);
			tree.add(50);
			tree.add(500);
			tree.add(5000);
			tree.add(50000);
			tree.add(500000);
			tree.add(5000000);
			tree.add(50000000);
			tree.add(1000000);
			tree.add(100000);
			tree.add(10000);
			tree.add(1000);
			tree.add(100);
		});

		it('should have 50 right of root', function() {
			expect(tree._root.right.value).to.equal(50);
		});
		it('you can get 500k', function() {
			expect(tree.contains(500000)).to.equal(true);
		});
		it('should have 500 right of 50', function() {
			expect(tree._root.right.right.value).to.equal(500);
		});
		it('should have 100 left of 500', function() {
			expect(tree._root.right.right.left.value).to.equal(100);
		});
		it('you can get 500k', function() {
			expect(tree.contains(500000)).to.equal(true);
		});
	});


	describe('Remove items test', function() {

		before(function() {
			tree = new BinarySearchTree();
			tree.add(5);
			for(var i = 0; i < 10; i++)
			{
				if(i === 5) continue;
				tree.add(i);
			}
			tree.remove(5);
		});

		it('should have 4 as root', function() {
			expect(tree._root.value).to.equal(4);
		});
		it('should not have 4 after 3', function() {
			expect(tree._root.left.right.right.right.right).to.equal(null);
		});
	});
});
