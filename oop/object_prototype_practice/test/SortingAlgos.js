describe('Sorting Algos', function() {

	describe('Merge Sort', function() {

		beforeEach(function() {
			sorter = new Sorter();
		});

		it('should sort correctly, even with a 0', function() {
			expect(sorter.mergeSort([6,2,1,3,5,0])).to.deep.equal([0, 1, 2, 3, 5, 6]);
		});

		it('should sort correctly, even with negative numbers', function() {
			expect(sorter.mergeSort([-6,2,1,3,5,0])).to.deep.equal([-6, 0, 1, 2, 3, 5]);
		});

	});

});
