describe('TreeNode Questions', function() {

	describe('serialize deserialize', function() {

        words = ["ab", "abc", "abcd",  "abcde", "abcde000", "good", "bad", "goo", "god", "goddess"];

		beforeEach(function() {
            trie = new Trie();
            for(var i=0; i<words.length; i++)
            {
                trie.insert(words[i]);
            }
        });

		it('input "a" -> get all words starting w/ a', function() {
			expect(autocomplete("a")).to.deep.equal(["ab", "abc", "abcd", "abcde000", "abcde"]);
        });

		it('input "ab" -> get all words starting w/ ab', function() {
			expect(autocomplete("ab")).to.deep.equal(["ab", "abc", "abcd", "abcde000", "abcde"]);
        });

		it('input "abc" -> get all words starting w/ abc', function() {
			expect(autocomplete("abc")).to.deep.equal(["abc", "abcd", "abcde000", "abcde"]);
        });

		it('input "b" -> get bad', function() {
			expect(autocomplete("b")).to.deep.equal(["bad"]);
        });

		it('input "goo" -> get goo and good', function() {
			expect(autocomplete("goo")).to.deep.equal(["good", "goo"]);
        });

		it('input "god" -> get god goddess', function() {
			expect(autocomplete("god")).to.deep.equal(["god", "goddess"]);
        });
	});

});
