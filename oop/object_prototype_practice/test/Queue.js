describe('Queue', function() {

	verifyClass(Queue).followsPattern('pseudoclassical', {}, false);

	beforeEach(function() {
		line = new Queue();
	});

	it('should be empty from the start', function() {
		expect(line.content).to.deep.equal([]);
	});

});
