var board = document.getElementById('board'),
    snake = document.getElementById('snake'),
    trailUnit = snake.children[0].offsetWidth,
    direction = 'right',
    framesRate = 8,
    counter = 0,
    play = false,
    keysEnabled = true,
    score = 0;

// Trail Coordinates
function getTrailCoords() {
  var trails = document.getElementsByClassName('trail'),
      trailsXY = [];
  
  for (var i = 0, trailsLength = trails.length; i < trailsLength; i++) {
    var trailX = parseInt(trails[i].offsetLeft) / trailUnit,
        trailY = parseInt(trails[i].offsetTop) / trailUnit;
    trailsXY.push({ x: trailX, y: trailY });
  };
  
  return trailsXY;
};

// Create & Place Token
function setToken() {
  var token = document.getElementById('token'),
      newTokenX = Math.floor(Math.random() * (19 - 0) + 0),
      newTokenY = Math.floor(Math.random() * (19 - 0) + 0),
      trailsXY = getTrailCoords();

  function testTokenXY() {
    for (var index in trailsXY) {
      if (newTokenX === trailsXY[index].x && newTokenY === trailsXY[index].y) {
        newTokenX = Math.floor(Math.random() * (19 - 0) + 0);
        newTokenY = Math.floor(Math.random() * (19 - 0) + 0);
        testTokenXY();
        break;
      };
    };
  };

  testTokenXY();
  token.style.top = newTokenY + 'rem';
  token.style.left = newTokenX + 'rem';
};

setToken();

// Step Loop
function step() {
  // Frame Rate
  if (counter < framesRate) {
    counter++;
    window.requestAnimationFrame(step);
    return;
  };
  
  keysEnabled = true;
  
  var trails = document.getElementsByClassName('trail'),
      trailsLength = trails.length,
      trailsXY = getTrailCoords(),
      currentHorizontalPos = trails[0].offsetLeft,
      currentVerticalPos = trails[0].offsetTop,
      token = document.getElementById('token');
  
  trails[trailsLength - 1].style.opacity = 1;
  
  for (var index in trailsXY) {
    if (index > 0 && currentHorizontalPos / trailUnit === trailsXY[index].x && currentVerticalPos / trailUnit === trailsXY[index].y) {
      play = false;
      break;
    };
  };
  
  if (play) {
    if (direction === 'left' && currentHorizontalPos > 0) {
      trails[trailsLength - 1].style.top = currentVerticalPos + 'px';
      trails[trailsLength - 1].style.left = currentHorizontalPos - trailUnit + 'px';
    } else if (direction === 'up' && currentVerticalPos > 0) {
      trails[trailsLength - 1].style.top = currentVerticalPos - trailUnit + 'px';
      trails[trailsLength - 1].style.left = currentHorizontalPos + 'px';
    } else if (direction === 'right' && currentHorizontalPos < board.offsetWidth - trailUnit) {
      trails[trailsLength - 1].style.top = currentVerticalPos + 'px';
      trails[trailsLength - 1].style.left = currentHorizontalPos + trailUnit + 'px';
    } else if (direction === 'down' && currentVerticalPos < board.offsetHeight - trailUnit) {
      trails[trailsLength - 1].style.top = currentVerticalPos + trailUnit + 'px';
      trails[trailsLength - 1].style.left = currentHorizontalPos + 'px';
    } else {
      play = false;
    };
    
    snake.insertBefore(trails[trailsLength - 1], trails[0]);
  };
  
  if (trails[0].offsetLeft === token.offsetLeft && trails[0].offsetTop === token.offsetTop) {
    var newTrail = document.createElement('li');
    newTrail.setAttribute('class', 'trail');
    newTrail.style.opacity = 0;
    snake.appendChild(newTrail);
    score++;
    board.dataset.score = score;
    setToken();
  };
  
  counter = 0;
  if (play) window.requestAnimationFrame(step);
  else { board.className = 'game-over'; }
};

// Play
function start() {
  if (!play) {
    snake.innerHTML = '<li class="trail"></li>';
    direction = 'right';
    play = true;
    counter = 0;
    board.className = '';
    window.requestAnimationFrame(step);
  };
};

board.addEventListener('click', function() {
  start();
});

// Keyboard Controls
document.onkeydown = function(e) {
  if (keysEnabled) {
    switch (e.keyCode) {
      case 13:
        start();
        break;
      case 37:
        if (direction !== 'right') direction = 'left';
        break;
      case 38:
        if (direction !== 'down') direction = 'up';
        break;
      case 39:
        if (direction !== 'left') direction = 'right';
        break;
      case 40:
        if (direction !== 'up') direction = 'down';
        break;
    };
    
    keysEnabled = false;
  };
};

// Touch Controls
var touchController = new Hammer(board);

touchController.get('swipe').set({
  direction: Hammer.DIRECTION_ALL,
  threshold: 5,
  velocity: 0.1
});

touchController.on('swipeleft swiperight swipeup swipedown', function(e) {
  if (keysEnabled) {
    switch (e.type) {
      case 'swipeleft':
        if (direction !== 'right') direction = 'left';
        break;
      case 'swipeup':
        if (direction !== 'down') direction = 'up';
        break;
      case 'swiperight':
        if (direction !== 'left') direction = 'right';
        break;
      case 'swipedown':
        if (direction !== 'up') direction = 'down';
        break;
    };

    keysEnabled = false;
  };
});