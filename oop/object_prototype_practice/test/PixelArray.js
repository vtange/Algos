describe('PixelArray Questions', function() {

	describe('getFieldsDFS', function() {

		it('should be 6 for testBinaryMaxPathSumTree', function() {
			var a = new PixelArray(arr);
			expect(a.getFieldsDFS()).to.deep.equal({1: 6, 2: 10, 3: 1, 4: 4});
		});

	});

});
