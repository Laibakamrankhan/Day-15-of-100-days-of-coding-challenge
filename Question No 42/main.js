function makingSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(item.join(', '), "."));
}
makingSandwich("tomato", "lettuce");
makingSandwich("beef", "onion", "mustard Sauce");
makingSandwich("mayo", "chicken");
