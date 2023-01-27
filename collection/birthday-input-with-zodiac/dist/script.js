const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

const zodiacs = ['capricornio', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];

function getZodiac(day, month) {
    let zodiac = [''].concat(zodiacs).concat([zodiacs[0]]),
        last = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (parseInt(day) > last[parseInt(month)]) ? zodiac[parseInt(month) * 1 + 1] : zodiac[parseInt(month)];
}

function createZodiac(cls, index) {
    let div = document.createElement('div');
    div.style.setProperty('--offset', index * -24 + 'px');
    div.classList.add(cls);
    return div;
}

function createSVG(id) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + id);
    svg.appendChild(use);
    svg.classList.add(id);
    return svg;
}

function prevInput(el) {
    let input = el.previousElementSibling ? el.previousElementSibling.previousElementSibling : null;
    return (input && input.tagName == 'INPUT') ? input : el;
}

function nextInput(el) {
    let input = el.nextElementSibling ? el.nextElementSibling.nextElementSibling : null;
    return (input && input.tagName == 'INPUT') ? input : el;
}

function pad(n) {
    return (n < 10) ? ('0' + n) : n;
}

function triggerInput(el) {
    let event = document.createEvent('Event');
    event.initEvent('input', true, true);

    el.dispatchEvent(event);
}

$$('.birthday').forEach(field => {

    let month = $('.month', field),
        day = $('.day', field),
        year = $('.year', field),
        icon = $('.icon', field),
        normal = $('.normal', icon),
        zodiac = $('.zodiac', icon),
        message = document.createElement('div');

    message.classList.add('error-message');

    field.appendChild(message);

    ['cake-light', 'cake'].forEach(name => normal.appendChild(createSVG(name)));

    zodiacs.forEach((name, index) => zodiac.appendChild(createZodiac(name, index)));

    month.addEventListener('keypress', e => {
        if(e.key > 1 && !month.value.length && e.keyCode != 37 && e.keyCode != 39 && document.activeElement == month) {
            month.value = '0' + e.key;
            triggerInput(month);
            setTimeout(() => nextInput(month).focus(), 50);
        }
    });

    day.addEventListener('keypress', e => {
        if(e.key > 3 && !day.value.length && e.keyCode != 37 && e.keyCode != 39 && document.activeElement == day) {
            day.value = '0' + e.key;
            triggerInput(day);
            setTimeout(() => nextInput(day).focus(), 50);
        }
    });

    [month, day, year].forEach(input => {

        input.addEventListener('keypress', e => {
            if(e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }
        });

        input.addEventListener('keydown', e => {
            if((e.keyCode == 8 && !input.value) || (e.keyCode == 37 && input.selectionStart == 0)) {
                prevInput(input).focus();
            }
            if(((e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 8 && (input.selectionStart == input.getAttribute('maxlength'))) || (e.keyCode == 39 && input.selectionStart == input.value.length))) {
                nextInput(input).focus();
            }
        });

        input.addEventListener('input', e => {

            let date = (month.value.length >= 1 && day.value.length >= 1 && year.value.length == 4) ? new Date(year.value + '-' + month.value + '-' + day.value) : true;

            if($('.show', zodiac)) {
                $('.show', zodiac).classList.remove('show');
            }

            if(day.value.length >= 1 && day.value > 0 && day.value < 32 && month.value.length >= 1 && month.value > 0 && month.value < 13) {
                $('.' + getZodiac(day.value, month.value), zodiac).classList.add('show');
                normal.classList.add('hide');
            } else {
                normal.classList.remove('hide');
            }

            field.classList.toggle('error', (day.value.length == 2 && (day.value < 1 || day.value > 31)) || (month.value.length == 2 && (month.value < 1 || month.value > 12)) || (date !== true && date > new Date) || (date !== true && date < (new Date).setFullYear((new Date).getFullYear() - 120)));

            if(date !== true && date > new Date) {
                message.textContent = 'Not born yet?';
                setTimeout(() => message.classList.add('show'), 50);
            } else if(date !== true && date < (new Date).setFullYear((new Date).getFullYear() - 120)) {
                message.textContent = '> 120 years is really old!';
                setTimeout(() => message.classList.add('show'), 50);
            } else {
                message.classList.remove('show');
            }

        });

    });

});