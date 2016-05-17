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

});
