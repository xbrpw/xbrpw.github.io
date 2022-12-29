// Location functions
function decimalToDMS(val){
  val = val.toString().split('.');
  var d = val[0];
  var m = (Number('0.' + val[1]) * 60).toString().split('.');
  return {
    d: makeValueGlobal(parseInt(d)),
    m: parseInt(m[0]),
    s: m.length > 1 ? Number('0.' + m[1]) * 60: 0
  }
}

function convertLocationToColor(address, cb){
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function(){
    var location_data = JSON.parse(this.responseText).results[0].geometry;
    var colors = dmsToColor(decimalToDMS(location_data.lat), decimalToDMS(location_data.lng));
    cb(colors);
  });
  xhr.open("GET", 'https://api.opencagedata.com/geocode/v1/json?key=9a443611d50d40f9881b379fd877dccf&q='+address);
  xhr.send();
}

function redrawEvents(events){
  document.getElementById('events').innerHTML = '';
  var events_total_time = events.reduce(function(accumulator, currentEvent){
    return accumulator + ((currentEvent.length_spent.hr * 60) + currentEvent.length_spent.min)
  }, 0);
  for(var event of events){
    createEventElement(event, events_total_time);
  }
}

function sortTimes(a,b){
  var a_start = getTimeInMinutes(a.time.start);
  var b_start = getTimeInMinutes(b.time.start);
  return a_start > b_start ? 1 : -1;
}

function makeValueGlobal(val){
  return val.toString().indexOf('-') > -1 ? Math.abs(val) : Math.abs(val) + 90;
}

function mathFunc(val_1, val_2, max_val){
  return (((val_1 + val_2) / 2) * 255) / max_val;
}

function dmsToColor(long, lat){
  return {
    red: mathFunc(long.d, lat.d, 180),
    green: mathFunc(long.m, lat.m, 60),
    blue: mathFunc(long.s, lat.s, 60)
  }
}
// End Location Functions
// Time Functions
function convertTimeToRGB(value, type){
  var max_val = type === 'hr' ? 12 : 60;
  return value * 255 / max_val;
}

function timeOverlapsCheck(event_time, events){
 
  var start_in_seconds = (event_time.start.hr * 60 * 60) + (event_time.start.min * 60) + event_time.start.sec;
  var end_in_seconds = (event_time.end.hr * 60 * 60) + (event_time.end.min * 60) + event_time.end.sec;
  var events_in_secs = events.map(function(event){
    return {
      start: getTimeInMinutes(event.time.start) * 60 + event.time.start.sec,
      end: getTimeInMinutes(event.time.end) * 60 + event.time.end.sec
    }
  });

  var time_overlaps = false;
  var i = 1;
  while(time_overlaps === false && i < events_in_secs.length){
    if(start_in_seconds <= events_in_secs[i - 1].end || end_in_seconds >= events_in_secs[i].star){
      time_overlaps = true;
    }
    i += 1;
  }
  return time_overlaps;
}
// End Time Functions


function getTime(id){
  var time_obj = {}
  var ids = ['hr', 'min', 'tod'];
  ids.forEach(function(val){
    time_obj[val] = document.getElementById(id + '-' + val).value;
  });
  time_obj['sec'] = new Date().getSeconds();
  return time_obj;
}

function createEventElement(time_obj, events_total_time){
  var color_bar = document.createElement('div');
  color_bar.className = 'color-bar';
  var times_as_colors = getTimesAsColors(time_obj);
  var average_time_color = getAverageTimeColor(times_as_colors);
  color_bar.style.height = ((getTimeInMinutes(time_obj.length_spent) * document.body.scrollHeight ) / events_total_time) + 'px';
  var text_content = document.createElement('div');
  text_content.className = 'color-bar-text';
  var time_span = document.createElement('span');
  time_span.className = 'time-span';
  time_span.innerHTML = time_obj.time.start.hr + ':' + time_obj.time.start.min + time_obj.time.start.tod + '&ndash;' + time_obj.time.end.hr + ':' + time_obj.time.end.min + time_obj.time.end.tod;
  text_content.appendChild(time_span);
  var time_spent = document.createElement('span');
  time_spent.className = 'time-spent';
  time_spent.innerHTML = time_obj.length_spent.hr + 'h' + time_obj.length_spent.min + 'm';
  text_content.appendChild(time_spent);
  color_bar.appendChild(text_content);
  var remove_button = document.createElement('button');
  remove_button.className = 'remove';
  remove_button.innerHTML = '&times;';
  remove_button.addEventListener('mouseup', function(){
    document.body.dispatchEvent(new CustomEvent('remove-item', {detail: time_obj}));  
  });
  color_bar.appendChild(remove_button);
  convertLocationToColor(time_obj.location, function(colors){
    var average_color = {
      red: (average_time_color.red + colors.red)/2,
      blue: (average_time_color.blue + colors.blue)/2,
      green: (average_time_color.green + colors.green)/2
    }
    
    color_bar.style.backgroundColor = 'rgb(' + average_color.red + ', ' + average_color.green + ', ' + average_color.blue + ')';
    var events_cont = document.getElementById('events');
  events_cont.appendChild(color_bar);
  });
  
}

function getTimesAsColors(time_obj){
  var times_as_colors = [];
  for(var i = 0; i < time_obj.length_spent.hr; i++){
    var color = {
      red: convertTimeToRGB(time_obj.time.start.hr + i),
      green: convertTimeToRGB(time_obj.time.start.min),
      blue: convertTimeToRGB(time_obj.time.start.sec)
    }
    times_as_colors.push(color);
  }
  return times_as_colors;
}

function getAverageTimeColor(times_arr){
  
  var average_color = times_arr.reduce(function(accumulator, current_color_obj, current_index){
    if(current_index === 0){
      return current_color_obj
    } else {
      return {
        red: current_color_obj.red + accumulator.red,
        green: current_color_obj.green + accumulator.green,
        blue: current_color_obj.blue + accumulator.blue
      }
    }
  });
  average_color = Object.keys(average_color).map(function(key, index){
    average_color[key] = average_color[key]/times_arr.length;
    return average_color;
  })[0];
  return average_color;
}

function getTimeSpent(time_in_minutes){
  var hrs = Math.floor(time_in_minutes / 60);
  return {
    hr: hrs,
    min: time_in_minutes - (hrs * 60)
  }
}

function getTimeInMinutes(time_obj){
  var hr = time_obj.tod === 'AM' && parseInt(time_obj.hr) === 12 ? 0 : time_obj.hr;
  hr = time_obj.tod === 'PM' && parseInt(time_obj.hr) !== 12 ? parseInt(hr) + 12 : parseInt(hr);
  return (hr * 60) + parseInt(time_obj.min);
}

window.onload = function(){
  var events = [];
  var ampm_inputs = document.querySelectorAll('.ampm-cont input');
  Array.prototype.forEach.call(ampm_inputs, function(elm){
    elm.addEventListener('mouseup', function(ev){
      elm.nextElementSibling.classList.toggle('active');
    });
  });
  var ampm_dropdowns_children = document.querySelectorAll('.ampm-dropdown p');
  Array.prototype.forEach.call(ampm_dropdowns_children, function(elm){
    elm.addEventListener('mouseup', function(ev){
      elm.parentElement.previousElementSibling.value = ev.target.textContent;
      elm.parentElement.classList.remove('active');
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('input[type="text"], textarea'), function(elm){
    elm.addEventListener('keyup', function(){
      if(elm.parentElement.className.indexOf('time') > -1){
        document.querySelector('#time .error').classList.remove('active');
      } else {
        document.querySelector('#location .error').classList.remove('active');
      }
    })
  })
  
  document.getElementById('add-event').addEventListener('mouseup', function(){
    var start = getTime('start');
    var end = getTime('end');
    var event = {
      location: document.querySelector('#location textarea').value,
      time: {
        start: start,
        end: end
      },
      length_spent: getTimeSpent(getTimeInMinutes(end) - getTimeInMinutes(start))
    }
    if (document.querySelector('#location textarea').value.length <= 0){
      document.querySelector('#location .error').classList.add('active');
    }

    if (events.length > 0 && timeOverlapsCheck(event.time, events) === true){
      document.querySelector('#time .error').classList.add('active');
    }

    if((events.length < 1 || timeOverlapsCheck(event.time, events) !== true) && document.querySelector('#location textarea').value.length > 0){
      events.push(event);
      events = events.sort(sortTimes);
      redrawEvents(events);
    }
  });
  document.body.addEventListener('remove-item', function(ev){
    var index_to_remove = events.findIndex(function(obj){
      return obj.time.start.hr === ev.detail.time.start.hr && obj.time.start.min === ev.detail.time.start.min && obj.time.start.tod === ev.detail.time.start.tod;
    });
    events.splice(index_to_remove, 1);
    redrawEvents(events);
  });
}