var language = window.navigator.language;
if (language.length > 2) {
    language = language.split('-');
    language = language[0];
}

//language = "fr"; // manually set language

if (language === "es") {
    var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
} else if (language === "cz") {
    var weekday = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    var month = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
} else if (language === "it") {
    var weekday = ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'];
    var month = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
} else if (language === "sp") {
    var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
} else if (language === "en") {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
} else if (language === "fr") {
    var weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var month = ["Janvie", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

} else if (language === "zh") {
    var weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
} else {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

(function clock() {
    "use strict";
    var adjDay, twentyfour, currentTime, currentHours, currentMinutes, mnth, day, oday, year, dat;
    twentyfour = false; ///set twentyfour here.
    adjDay = function(day, daynum) {
        var offset, doffset, left;
        switch (day.length) {
            case 6:
                offset = "0px";
                doffset = "1px";
                left = "-1px";
                break;
            case 7:
                offset = "0px";
                doffset = "0px";
                left = "-1px";
                break;
            case 8:
                offset = "2px";
                doffset = "0px";
                left = "-4px";
                break;
            case 9:
                offset = "3.5px";
                doffset = ".1px";
                left = "-6px";
                break;
            default:
                offset = "0px";
                doffset = "0px";
                left = "0px";
        }
        if (daynum === 1) {
            offset = "1px";
            left = "-2px";
        }
        if (daynum === 5) {
            doffset = "1.5px";
        }
        if (daynum === 6) {
            left = "-4px";
            offset = "2px";
            doffset = ".1px";
        }
        document.getElementById('year').style.letterSpacing = offset;
        document.getElementById('day').style.letterSpacing = doffset;
        document.getElementById('dates').style.left = left;
    };

    currentTime = new Date();
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    mnth = currentTime.getMonth();
    dat = currentTime.getDate();
    day = currentTime.getDay();
    oday = (dat < 10 ? "0" : "") + dat;
    year = currentTime.getFullYear();

    if (!twentyfour) {
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        currentHours = (currentHours === 0) ? 12 : currentHours;
    }

    document.getElementById('clock').innerHTML = currentHours + ":" + currentMinutes;
    document.getElementById('month').innerHTML = month[mnth];
    document.getElementById('date').innerHTML = oday;
    document.getElementById('day').innerHTML = weekday[day];
    document.getElementById('year').innerHTML = year;

    adjDay(weekday[day], day);
    setTimeout(function() {
        clock();
    }, 30000);
}());