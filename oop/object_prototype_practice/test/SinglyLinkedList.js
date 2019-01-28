describe('Singly Linked List', function() {

	verifyClass(SinglyLinkedList).followsPattern('pseudoclassical', {}, false);

	beforeEach(function() {
	list = new SinglyLinkedList();
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

		it('hasLoop returns false', function() {
			expect(hasLoop(list._head)).to.equal(false);
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

		it('hasLoop returns false', function() {
			expect(hasLoop(list._head)).to.equal(false);
		});
	});

	describe('make loop works', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
			list.add('b',"this is value for 'b'");
			list.add('c',"this is value for 'c'");
			list.add('d',"this is value for 'd'");
			list.makeLoop();
		});

		it('d is tail', function() {
			expect(list._tail.value).to.equal("this is value for 'd'");
		});

		it('a is next of d', function() {
			expect(list.get('d').next.value).to.equal("this is value for 'a'");
		});

		it('c is tail after removing d', function() {
			list.remove('d');
			expect(list._tail.value).to.equal("this is value for 'c'");
		});

		it('a is next of c after removing d', function() {
			list.remove('d');
			expect(list.get('c').next.value).to.equal("this is value for 'a'");
		});

		it('hasLoop passes', function() {
			expect(hasLoop(list._head)).to.equal(true);
		});
	});

	describe('one node loop', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
			list.makeLoop();
		});

		it('hasLoop passes', function() {
			expect(hasLoop(list._head)).to.equal(true);
		});

		it('can remove a', function() {
			list.remove('a');
			expect(list._head).to.equal(null);
			expect(list._tail).to.equal(null);
		});

		it('hasLoop now falses', function() {
			list.remove('a');
			expect(hasLoop(list._head)).to.equal(false);
		});
	});
	describe('two node loop', function() {

		beforeEach(function() {
			list.add('a',"this is value for 'a'");
			list.add('b',"this is value for 'b'");
			list.makeLoop();
		});

		it('hasLoop passes', function() {
			expect(hasLoop(list._head)).to.equal(true);
		});

		it('can remove a', function() {
			list.remove('a');
			expect(hasLoop(list._head)).to.equal(true);
		});
	});
});
