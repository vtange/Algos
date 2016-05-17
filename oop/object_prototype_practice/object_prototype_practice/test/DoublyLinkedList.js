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
		
		it('can make circular where a points to a and vice versa, then break it', function() {
			list.makeLoop();
			expect(list.get('a').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'a'");
			list.breakLoop();
			expect(list.get('a').next).to.equal(null);
			expect(list.get('a').prev).to.equal(null);
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
		it('can make circular where b points to a and vice versa, then break it', function() {
			list.makeLoop();
			expect(list.get('b').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'b'");
			list.breakLoop();
			expect(list.get('b').next).to.equal(null);
			expect(list.get('a').prev).to.equal(null);
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
		
		it('can make circular where d points to a and vice versa, then break it', function() {
			list.toggleCircular();
			expect(list.get('d').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'd'");
			list.toggleCircular();
			expect(list.get('d').next).to.equal(null);
			expect(list.get('a').prev).to.equal(null);
		});
		
		it('circular d->a becomes e->a when e is added', function() {
			list.toggleCircular();
			expect(list.get('d').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'd'");
			list.add('e',"this is value for 'e'");
			expect(list.get('d').next.value).to.equal("this is value for 'e'");
			expect(list.get('e').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'e'");
		});

		it('circular d->a becomes c->a when d is removed', function() {
			list.toggleCircular();
			expect(list.get('d').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'd'");
			list.remove('d');
			expect(list.get('c').next.value).to.equal("this is value for 'a'");
			expect(list.get('a').prev.value).to.equal("this is value for 'c'");
		});
	});
});
