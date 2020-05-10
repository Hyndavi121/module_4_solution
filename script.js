(function () {
  var names = [
    "Charlie",
    "Jim",
    "john",
    "Mark",
    "Louis",
    "Jack",
    "Reena",
    "jack",
    "Kim",
    "Nick",
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter == "j" && "J") {
      console.log("Goodbye" + " " + "J" + names[i]);
    } else {
      console.log("Hello" + "  " + names[i]);
    }
  }
})();
