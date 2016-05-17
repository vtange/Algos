describe('Singly Linked List', function() {

	verifyClass(SinglyLinkedList).followsPattern('pseudoclassical', {}, false);

	beforeEach(function() {
	list = new SinglyLinkedList();
	});

	it('should be empty from the start', function() {
	expect(list.content).to.deep.equal({});
	});

	it('should definitely have no head', function() {
	expect(list._head).to.equal(undefined);
	});

	it('should have no tail', function() {
	expect(list._tail).to.equal(null);
	});

	describe('Adding and removing', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
		});

		it('you can add a value and access it later', function() {
			expect(list.get('a').value).to.equal("this is value for 'a'");
		});

		it('you can add a value and remove it', function() {
			list.remove('a');
			expect(list.get('a')).to.equal(undefined);
		});
	});

	describe('Adding and removing ({a,b})', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
			list.add('b',"this is value for 'b'");
		});

		it('b is tail', function() {
			expect(list._tail.value).to.equal("this is value for 'b'");
		});
		
		it('you can get value for b', function() {
			expect(list.get('b').value).to.equal("this is value for 'b'");
		});

		it('you can get value for b after removing a, and b would still be tail', function() {
			list.remove('a');
			expect(list.get('a')).to.equal(undefined);
			expect(list.get('b').value).to.equal("this is value for 'b'");
			expect(list._tail.value).to.equal("this is value for 'b'");
		});

		it('you can remove b and make a the tail without a next node', function() {
			list.remove('b');
			expect(list.get('b')).to.equal(undefined);
			expect(list.get('a').next).to.equal(null);
			expect(list._tail.value).to.equal("this is value for 'a'");
		});
	});

	describe('Adding and removing ({a,b})', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
			list.add('b',"this is value for 'b'");
		});

		it('b is tail', function() {
			expect(list._tail.value).to.equal("this is value for 'b'");
		});
		
		it('you can get value for b', function() {
			expect(list.get('b').value).to.equal("this is value for 'b'");
		});

		it('you can get value for b after removing a, and b would still be tail', function() {
			list.remove('a');
			expect(list.get('a')).to.equal(undefined);
			expect(list.get('b').value).to.equal("this is value for 'b'");
			expect(list._tail.value).to.equal("this is value for 'b'");
		});
	});
});
