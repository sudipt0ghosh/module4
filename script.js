(function (window) {

var names = ["sudipta", "jonota", "joti", "jibanananda", "rajesh", "poran", "damini", "ayan", "debasmita", "jogi"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);