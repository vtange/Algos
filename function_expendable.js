function once(fn) {
  var memory = {};
  return function(){
   var funct = JSON.stringify(fn);
    if(!memory[funct]){
        memory[funct] = true;//store 'true' for inputted fn into memory
        //return fn(arguments) -> { '0': 'ooo' }
        return fn.apply(null, arguments);
    }
    return;
  };
}


//competitor

function once(fn) {
  var call = true
  return function() {
    if (call) {
      call = false
      return fn.apply(this, arguments)
    }
  }
}