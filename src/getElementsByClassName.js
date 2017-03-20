// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var final = [];
  element = element || document.body;
  
    if (element.classList) {
      if (element.classList.contains(className)) {
        final.push(element);
      }
    }
    var p = 0;
    while (p < element.children.length) {
      var childElement = getElementsByClassName(className, element.children[p]);
      final = final.concat(childElement);
      p++;
    }

  return final;
};