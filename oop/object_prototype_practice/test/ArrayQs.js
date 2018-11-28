describe('Array Questions', function() {

	describe('arrAdd2K', function() {

		it('should be false for []', function() {
			expect(arrAdd2K([],1)).to.equal(false);
		});

		it('should be true for [7,3], 10', function() {
			expect(arrAdd2K([7,3],10)).to.equal(true);
		});

		it('should be true for [10,15,3,7,3], 17', function() {
			expect(arrAdd2K([10,15,3,7,3],17)).to.equal(true);
        });

	});

	describe('arrMapProduct', function() {

		it('should be [] for []', function() {
			expect(arrMapProduct([])).to.deep.equal([]);
		});

		it('should be [2,3,6] for [3,2,1]', function() {
			expect(arrMapProduct([3,2,1])).to.deep.equal([2,3,6]);
		});

		it('should be [120, 60, 40, 30, 24] for [1,2,3,4,5]', function() {
			expect(arrMapProduct([1,2,3,4,5])).to.deep.equal([120, 60, 40, 30, 24]);
		});

        describe('no division', function() {

            //without division
            it('should be [] for []', function() {
                expect(arrMapProductNoDivide([])).to.deep.equal([]);
            });

            it('should be [2,3,6] for [3,2,1]', function() {
                expect(arrMapProductNoDivide([3,2,1])).to.deep.equal([2,3,6]);
            });

            it('should be [120, 60, 40, 30, 24] for [1,2,3,4,5]', function() {
                expect(arrMapProductNoDivide([1,2,3,4,5])).to.deep.equal([120, 60, 40, 30, 24]);
            });

        });
	});

	describe('arrFirstMissingPosInt', function() {

		it('in [3, 4, -1, 1] out 2', function() {
			expect(arrFirstMissingPosInt([3, 4, -1, 1])).to.equal(2);
		});

		it('in [1, 2, 0] out 3', function() {
			expect(arrFirstMissingPosInt([1, 2, 0])).to.equal(3);
		});

        describe('using sets', function() {

			it('in [3, 4, -1, 1] out 2', function() {
				expect(arrFirstMissingPosIntUsingSet([3, 4, -1, 1])).to.equal(2);
			});

			it('in [1, 2, 0] out 3', function() {
				expect(arrFirstMissingPosIntUsingSet([1, 2, 0])).to.equal(3);
			});

        });
	});

	describe('largestNonAdjacentSum', function() {

		it('in [] out 2', function() {
			expect(largestNonAdjacentSum([])).to.equal(0);
		});

		it('in [2] out 2', function() {
			expect(largestNonAdjacentSum([2])).to.equal(2);
		});

		it('in [2, 4] out 4', function() {
			expect(largestNonAdjacentSum([2, 4])).to.equal(4);
		});

		it('in [2, 4, 6, 2, 5] out 13', function() {
			expect(largestNonAdjacentSum([2, 4, 6, 2, 5])).to.equal(13);
		});

		it('in [5, 1, 1, 5] out 10', function() {
			expect(largestNonAdjacentSum([5, 1, 1, 5])).to.equal(10);
		});

	});
});
