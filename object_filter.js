//________________________________________________________________________________________________

function every(collection, pre) {
    //start assuming things are nice and sunny, if something is wrong with collection, switch to false and return
    var tf = true;

  if (arguments[1].constructor === Object){
    for (var j = 0; j < collection.length; j++) {
      if (collection[j].hasOwnProperty(Object.keys(pre))) {

         // use obj so the next line is possible
              var obj = collection[j];

              // if keys are not the same, change tf to false and return it
              if(obj[Object.keys(pre)] !== pre[Object.keys(pre)]) {
                tf = false;
                return tf;
              }
        }
  }
  }
  else {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(arguments[1])) {
            return tf;
        }
        else {
            tf = false;
            return tf;
        }
  }
}
}


every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'female'});
