
//________________________________________________________________________________________________
//for every object, and for every "needtoMatch" property in source
//if "arr" doesn't yet have that obj, push an obj that matches any property in source
//basically an OR search for object properties


function where(collection, source) {
  var arr = [];
  // What's in a name?
  for (var i = 0; i < collection.length; i++) {
      for (var needToMatch in source){
        var obj = collection[i];
            if(obj[needToMatch] == source[needToMatch]) {
                if(arr.indexOf(obj) === -1){
                        arr.push(obj);
                }
            }
      }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null },
{ first: 'Tybalt', last: 'Capulet' }], { first: 'Mercutio', last: 'Capulet' });

