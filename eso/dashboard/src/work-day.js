const time = {
	start: new Date(),
	current: null,
	lunch: setTime(7,0,0),
	workStart: setTime(7,0,0),
	workEnd: setTime(14,30,0)
};

function getTime() {

	time.current = new Date();

	const displayTime = {
		"Day": convertDay(time.current),
		"Month": convertMonth(time.current),
		"Date": time.current.getDate(),
		"Year": time.current.getFullYear(),
		"Hours": convertHours(time.current),
		"Minutes":convertMinutes(time.current),
		"Seconds": convertSeconds(time.current),
		"AMPM": convertAMPM(time.current)
	};

	document.getElementById("Day").innerHTML = displayTime.Day;
	document.getElementById("Month").innerHTML = displayTime.Month;
	document.getElementById("Date").innerHTML = displayTime.Date;
	document.getElementById("Year").innerHTML = displayTime.Year;
	document.getElementById("Hours").innerHTML = displayTime.Hours;
	document.getElementById("Minutes").innerHTML = displayTime.Minutes;
	document.getElementById("Seconds").innerHTML = displayTime.Seconds;
	document.getElementById("AMPM").innerHTML = displayTime.AMPM;

	
	const diffSpent = Math.abs(timeDifference(time.current, time.start));
	const diffLunch = timeDifference(time.current, time.lunch);
	const diffEnd =  timeDifference(time.current, time.workEnd);

	const displaySpent = generateDisplayText(diffSpent, '');

	const displayLunch = generateDisplayText(diffLunch, 'Time Until Lunch');

	const displayEnd = generateDisplayText(diffEnd, 'Tiempo restante del día de hoy');

	document.getElementById("DeltaHours").innerHTML = displaySpent.hours;
	document.getElementById("DeltaMinutes").innerHTML = displaySpent.minutes;
	document.getElementById("DeltaSeconds").innerHTML = displaySpent.seconds;

	if (diffLunch > 0 && diffEnd > 0) {
		document.getElementById("End").innerHTML = displayLunch.text;
		document.getElementById("hoursUntil").innerHTML = displayLunch.hours;
		document.getElementById("minutesUntil").innerHTML = displayLunch.minutes;
		document.getElementById("secondsUntil").innerHTML = displayLunch.seconds;

	} else if (diffLunch <= 0 && diffEnd > 0) {
		document.getElementById("End").innerHTML = displayEnd.text;
		document.getElementById("hoursUntil").innerHTML = displayEnd.hours;
		document.getElementById("minutesUntil").innerHTML = displayEnd.minutes;
		document.getElementById("secondsUntil").innerHTML = displayEnd.seconds;

	} else if (diffLunch < 0 && diffEnd <= 0) {
		document.getElementById("Lunch").innerHTML = 'Sesión terminada';
		document.getElementById("Lunch").style.fontSize = '16px';
		document.getElementById("Lunch").style.color = 'inherith';
	}
}

function setTime (hours, minutes, seconds) {
	const dateObject = new Date();

	dateObject.setHours(hours);
	dateObject.setMinutes(minutes);
	dateObject.setSeconds(seconds);
	return dateObject;
}

function generateDisplayText (difference, text) {
	 const display = {
		text: text,
		hours: '00',
		minutes: '00',
		seconds: '00'
	};

	if (difference < 60) {
		display.seconds = addLeadingZero(difference);
	} else if (difference > 60 && difference < 3600) {
		display.seconds = addLeadingZero(difference % 60);
		display.minutes = addLeadingZero(Math.floor(difference/60));
	} else if (difference > 3600) {
		display.seconds = addLeadingZero(difference % 60);
		display.minutes = Math.floor(difference/60);
		display.hours = Math.floor(display.minutes/60);
		display.minutes = addLeadingZero(display.minutes % 60);
	}

	return display
}

function convertDay (now) {
	const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

	const day = days[now.getDay()];
	return day;
}

function convertMonth (now) {
	const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	const month = months[now.getMonth()];
	return month;
}

function convertHours(now) {
	let hour;

	hour = now.getHours();

	if (hour === 12  || hour == 24) {
		hour = 12;
	} else {
		hour = hour%12;
	}

	return hour;
}

function convertMinutes (now) {
	let minute = now.getMinutes().toString();

	minute = addLeadingZero(minute);

	return minute;
}

function convertSeconds (now) {
	let second = now.getSeconds().toString();

	second = addLeadingZero(second);

	return second;
}

function convertAMPM (now) {
	const hour = now.getHours();

	if(hour >= 12) {
		const ampm = "PM";
		return ampm;
	} else {
		const ampm = "AM";
		return ampm;
	}

	
}

function timeDifference(now, alarm) {
	
	if (now.getFullYear() === alarm.getFullYear() && now.getMonth() === alarm.getMonth() && now.getDate() === alarm.getDate()) {
		const currentSecs = convertDateToSeconds(now);
		const alarmSecs = convertDateToSeconds(alarm);
		const diffSecs = alarmSecs - currentSecs;
		return diffSecs;
	}
}

function convertDateToSeconds (date) {
	let seconds = 0;

	seconds = date.getHours() * 60;
	seconds = seconds + date.getMinutes();
	seconds = seconds * 60;
	seconds = seconds + date.getSeconds();

	return seconds;
}

function addLeadingZero (int) {
	if (int < 10) {
		return '0' + int;
	} else {
		return int;
	}
}

window.onload = function() {

	setInterval(() => getTime(), 1000);

	if(console === undefined) {
		console=function(){};
	}
};