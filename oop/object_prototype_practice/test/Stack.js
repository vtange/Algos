describe('Stack', function() {

	verifyClass(Stack).followsPattern('pseudoclassical', {}, false);

	beforeEach(function() {
		deck = new Stack();
	});

	it('should be empty from the start', function() {
		expect(deck.content).to.deep.equal({});
	});

	it('should have length of zero at start', function() {
		expect(deck.length).to.equal(0);
	});

	describe('Adding and removing', function() {

		beforeEach(function() {
			deck.add(31);
		});

		it('you can peek to see top value', function() {
			expect(deck.peek()).to.deep.equal({value:31});
		});

		it('you can remove the top card', function() {
			expect(deck.draw()).to.deep.equal({value:31});
			expect(deck.length).to.equal(0);
			expect(deck.peek()).to.equal(undefined);
		});
	});
	
	describe('Adding and removing (bigger deck)', function() {

		beforeEach(function() {
			deck.add(31);
			deck.add(1);
			deck.add(31);
			deck.add(3141);
			deck.add(3443);
			deck.add(31);
		});

		it('you can peek to see top value', function() {
			expect(deck.peek()).to.deep.equal({value:31});
		});

		it('you can remove the top card', function() {
			expect(deck.draw()).to.deep.equal({value:31});
			expect(deck.length).to.equal(5);
			expect(deck.peek()).to.deep.equal({value:3443});
		});

		it('you can remove more cards', function() {
			deck.draw();//draw 31 first
			expect(deck.draw()).to.deep.equal({value:3443});
			expect(deck.length).to.equal(4);
			expect(deck.peek()).to.deep.equal({value:3141});
		});
	});
});
