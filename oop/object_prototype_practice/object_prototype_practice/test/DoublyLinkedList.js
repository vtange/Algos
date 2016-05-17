describe('Doubly Linked List', function() {

	verifyClass(DoublyLinkedList).followsPattern('pseudoclassical', {}, false);

	beforeEach(function() {
	list = new DoublyLinkedList();
	});

	it('should be empty from the start', function() {
	expect(list.content).to.deep.equal({});
	});

	it('should have no head', function() {
	expect(list._head).to.equal(null);
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
			expect(list.get('b').value).to.equal("this is value for 'b'");
			expect(list._tail.value).to.equal("this is value for 'b'");
		});

		it('you can remove b and make a the tail without a next node', function() {
			list.remove('b');
			expect(list.get('a').next).to.equal(null);
			expect(list._tail.value).to.equal("this is value for 'a'");
		});
	});

	describe('Adding and removing ({a,b,c,d})', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
			list.add('b',"this is value for 'b'");
			list.add('c',"this is value for 'c'");
			list.add('d',"this is value for 'd'");
		});

		it('d is tail', function() {
			expect(list._tail.value).to.equal("this is value for 'd'");
		});

		it('you can get value for d', function() {
			expect(list.get('d').value).to.equal("this is value for 'd'");
		});

		it('c is tail after removing d', function() {
			list.remove('d');
			expect(list._tail.value).to.equal("this is value for 'c'");
		});

		it('d would still be tail after removing b', function() {
			list.remove('b');
			expect(list._tail.value).to.equal("this is value for 'd'");
		});

		it('a points to c after removing b', function() {
			list.remove('b');
			expect(list.get('a').next.value).to.equal("this is value for 'c'");
		});

		it('c points to d after removing b', function() {
			list.remove('b');
			expect(list.get('c').next.value).to.equal("this is value for 'd'");
		});
	});
});
