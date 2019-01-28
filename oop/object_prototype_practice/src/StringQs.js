function longestPalindromeSubstring(string)
{
    //abbe -> bb
    //babed -> bab
    //racecar -> racecar, aceca

    /*
    O^2 time and space
    soln 1: make "stringReverse", look for common substrings, and for each common substring check if they are actually palindromes (reverse the substring and check each letter)

    O^2 time constant space, doesn't involve a longest common substring problem ^
    soln 2: loop letters in string, for each do a growing function.
        -> first check for double letters, then check if letter[i-1] and letter[i+1] are the same and grow.

    */

    if (string.length <= 1) return string;
    let start = 0, end = 0;

    //abb
    for (let i = 0; i < string.length; i++) {
      const len1 = expandAroundCenter(string, i, i);
      const len2 = expandAroundCenter(string, i, i + 1);
      const len = Math.max(len1, len2);
      if (len > end - start) {
        start = i - (len-1) / 2;
        end = i + len / 2;
      }
    }
    return string.slice(Math.ceil(start), end + 1);
};

function expandAroundCenter(string, left, right) {
    let L = left,
      R = right;
    while (L > -1 && R < string.length) {
        if (string[L] !== string[R]) break;
        L--;
        R++;
    }
    return R - L - 1;
}

function shortestSubstringWLetters(string, stringOfLetters)
{
    //acbbaca -> baca
    //create table of letters found in stringOfLetters
    //      -> "aca" = {a:2, c:1};


    //two pointers, string[0], string[1];
    //newTable {} for letters found in string
    //move pointer2, tick up letters in newTable til we find all letters in stringOfLetters's table. mark it.
    //continue moving pointer2 until we find more letters than we need. (one more "a" AND one more "c")
    //move pointer1 til we have only {a:2, c:1} again;
}
