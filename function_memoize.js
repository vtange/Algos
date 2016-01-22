function memoize(func) {
    var storage = {};

    return function() {
      var arg = JSON.stringify(arguments);
      if (!storage[arg]) {
        storage[arg] = func.apply(null, arguments);	//call/apply with null == running function normally.
      }

      return storage[arg];
    };
  };