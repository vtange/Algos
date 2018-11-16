describe('TreeNode Questions', function() {

	describe('serialize deserialize', function() {

		beforeEach(function() {
            singletree = new TreeNode("root");
			tree = new TreeNode("root", new TreeNode("left", new TreeNode("left.left")), new TreeNode("right"));
        });

		it('value should be root for singletree', function() {
			expect(deserialize(serialize(singletree)).value).to.equal("root");
        });

		it('left should be null for singletree', function() {
			expect(deserialize(serialize(singletree)).left).to.equal(null);
		});

		it('right should be null for singletree', function() {
			expect(deserialize(serialize(singletree)).right).to.equal(null);
        });

		it('value should be left.left for tree', function() {
			expect(deserialize(serialize(tree)).left.left.value).to.equal("left.left");
		});
	});

});
