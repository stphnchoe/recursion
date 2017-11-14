// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elementStack = [];
  function findClassName(node) {
    if (_(node.classList).contains(className)) {
      elementStack.push(node);
    }
    for(var i = 0; i < node.childNodes.length; i++){
       findClassName(node.childNodes[i]);     
    } 
    return elementStack;
  }
  return findClassName(document.body);
};
