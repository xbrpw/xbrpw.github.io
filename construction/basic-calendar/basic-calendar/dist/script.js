function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

function createdays(days, color, month) {
  for (let i = 1; i < days + 1; i++) {
    var ul = document.getElementById("calender");
    var li = document.createElement("li");
    li.innerHTML = i + "<span>" + month + "</span>";
    li.className = color;
    ul.appendChild(li);
  }
}

function setcurrentday() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var today = Math.floor(diff / oneDay);
  document
    .getElementById("calender")
    .getElementsByTagName("li")
    [today + 6 + offsetday].setAttribute("id", "currentday");
  let top = document.querySelector(".top");   //Scroll
  let height = top.offsetHeight;
  const element = document.getElementById("currentday");
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - height;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

//Get Year
const d = new Date();
year = d.getFullYear();

//Is this a leapyear?
lyear = leapyear(year);
if (lyear == true) {
  var feb = 29;
} else var feb = 28;

//Add offset
const da = new Date(year + "-01-01");
let offsetday = da.getDay();
for (let i = 1; i < offsetday + 1; i++) {
  var ul = document.getElementById("calender");
  var li = document.createElement("li");
  ul.appendChild(li);
}

// Create calender
createdays(31, "colorlight", "January");
createdays(feb, "colordark", "February");
createdays(31, "colorlight", "March");
createdays(30, "colordark", "April");
createdays(31, "colorlight", "May");
createdays(30, "colordark", "June");
createdays(31, "colorlight", "July");
createdays(31, "colordark", "August");
createdays(30, "colorlight", "September");
createdays(31, "colordark", "October");
createdays(30, "colorlight", "November");
createdays(31, "colordark", "December");
setcurrentday(); //Highlight Today