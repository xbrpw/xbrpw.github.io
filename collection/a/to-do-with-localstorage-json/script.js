var input = document.getElementById("input");
var box = document.querySelector(".box");

//var vals = [];

// The || "[]" is a fallback in case localStorage returns null
var vals = JSON.parse(localStorage.getItem('mylist') || "[]");
var li;

input.addEventListener("keyup", function(e) {
  var val = e.target.value;

  if (e.which == 13) {
    box.innerHTML = "";
    input.value = " ";

    // Push input value array
    vals.push(val);
    localStorage.setItem('mylist', JSON.stringify(vals));

    // Loop input values
    vals.map(function(item, index) {
      li = document.createElement("LI");
      box.appendChild(li);
      li.innerHTML = JSON.parse(localStorage.getItem('mylist'))[index];
    });
  }

}, false);

vals.forEach(function(entry) {
  li = document.createElement("LI");
  box.appendChild(li);
  li.innerHTML = entry;
})