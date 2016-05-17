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

});
