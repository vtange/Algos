//________________________________________________________________________________________________
//for searching multiple properties at once (match objs with honda and capulet)


function where(collection, source) {
  var arr = [];

  for (var i = 0; i < collection.length; i++) {
      var obj = collection[i];
      if ((obj.first == source.first || source.first == null) && (obj.middle == source.middle || source.middle == null) && (obj.last == source.last || source.last == null)) {
              arr.push(obj);
      }
  }
  return arr;
}

where([{ 'first': 'Romeo', 'middle': 'Honda', 'last': 'Montague' }, { 'first': 'Mercutio', 'middle': 'Honda', 'last': null },
{ 'first': 'Tybalt', 'middle': 'Honda', 'last': 'Capulet' }], { 'middle': 'Honda', 'last': 'Capulet' });
