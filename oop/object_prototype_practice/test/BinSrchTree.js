describe('Binary Search Tree', function() {

	describe('Basic', function() {

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

	});

});
