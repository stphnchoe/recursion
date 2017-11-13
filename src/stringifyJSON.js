// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined' && typeof obj === 'function') {
    return;
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'boolean') {
    return '' + obj;
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
    }
    return '[' + obj + ']';
  } else {
    if (Object.keys(obj) === 0) {
      return '{}';
    }
    var arrayObjectProperties = [];
    for (var key in obj) {
      if ((typeof obj[key] !== 'undefined') && (typeof (obj[key]) !== 'function')) {
      arrayObjectProperties.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }
    return '{' + arrayObjectProperties.join(',') + '}'
  }
  return obj;
};