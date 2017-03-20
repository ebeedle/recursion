// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var map = function(array, iterator) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(iterator(array[i]))
  }
    return arr;
}

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    obj = map(obj, stringifyJSON);
    return '[' + obj + ']';
  } else if (typeof obj === 'object' && obj) {
    var changed = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) { 
      var key = keys[i];
      if (typeof(obj[key]) === 'function' || obj[key] === undefined)
        continue;
      changed.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + changed.join()	 + '}';
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else 
    return  '' +  obj;	
};