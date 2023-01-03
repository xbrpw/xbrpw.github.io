// Highlight February 2022
for (let i = 0; i < 35; i++) {
	var datesIngrid = document
		.getElementsByTagName("time")
		[i].getAttribute("datetime");
	var n = datesIngrid.startsWith("2022-02");
	if (n == true) {
		document.getElementById("calender").getElementsByTagName("li")[
			i + 7
		].className += " current";
	}
}

// Get Year, Month and Day
const d = new Date();
year = d.getFullYear();
Month = d.getMonth();
day = d.getDate();

// Only apply currant day if february and 2022
if (year == 2022 && Month == 1) {
	document.getElementById("calender").getElementsByTagName("li")[
		day + 7
	].className += " currentday";
}