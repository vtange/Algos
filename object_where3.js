//________________________________________________________________________________________________
//basic name search


function where(collection, source) {
  var arr = [];

  for (var i = 0; i < collection.length; i++) {
      var obj = collection[i];
      if ((obj.name.toLowerCase().search(source.name.toLowerCase())) >= 0) {
              arr.push(obj);
      }
  }
  return arr;
}

where([{ 'first': 'Romeo', 'name': 'Hon', 'last': 'Montague' }, { 'first': 'Mercutio', 'name': 'Honda', 'last': null },
{ 'first': 'Tybalt', 'name': 'Honda', 'last': 'Capulet' }], { 'name': 'Hon', 'last': 'Capulet' });
