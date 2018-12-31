const WORD_END = '__WORD_END';

function Trie()
{
    this.trie = Object.create(null);
}

Trie.prototype.insert = function(word)
{
    var trie = this.trie;
    for(var i=0;i<word.length;i++)
    {
        if(!trie[word[i]])
        {
            trie[word[i]] = Object.create(null);
        }
        trie = trie[word[i]]
    }
    trie[WORD_END] = true;
}


Trie.prototype.elements = function(startOfWord)
{
    //stack
    var stack = [];
    var trie = this.trie;

    //get as deep in trie as we can with start of word
    for(var i=0;i<startOfWord.length;i++)
    {
        if(trie[startOfWord[i]])
        {
            stack.push(startOfWord[i]);
            trie = trie[startOfWord[i]];
        }
        else
        {
            return [];
        }
    }

    if(trie)
    {
        return this._elements(stack, trie);
    }
    //needs to return words[]
    //de -> derp, deer
    //return this._elements(startOfWord[i]);
}

Trie.prototype._elements = function(letter_stack, subtrie)
{
    var word_results = [], subresult = [];
    for(var prop in subtrie)
    {
        if(prop === WORD_END)
        {
            //we have a word, push letter stack to words
            word_results.push(letter_stack.slice().join(""));
        }
        else if(subtrie[prop])
        {
            word_results = word_results.concat(this._elements(letter_stack.concat([prop]), subtrie[prop]));
        }
    }
    return word_results;
}

function autocomplete(s)
{
    return trie.elements(s);
}