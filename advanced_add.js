//________________________________________________________________________________________________
//make a array out of arguments into args. if/else on args[0], args[1] if they are numbers and can be added.
//if there add(x,y), add them
//else if there is add(x), but no y, return a function that grabs the next (y) via "value"

function add() {
   var args = [].slice.call( arguments );

    if (args[0].constructor !== Number) {
     return undefined;
    }
    else if (args[1] === undefined){
        return function( value ) {
            if( typeof value !== 'number' || value !== value ) {
                return undefined;
            }
        return args[ 0 ] + value;
        };
    }
    else if (args[0].constructor === Number && args[1].constructor === Number ) {
        return args[0] + args[1];
    }
    else {
        return undefined;
    }
}

add(2)(3);
