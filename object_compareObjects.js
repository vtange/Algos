
var compareObjects = function(apple, orange){
  var equals = true;
  for (var property in apple){
      if (apple[property].constructor == Object){
      	equals = deepEquals(apple[property], orange[property]);  
      }
    	else if (apple[property] !== orange[property]){
      	return false;
      }
  }
  return equals;
};