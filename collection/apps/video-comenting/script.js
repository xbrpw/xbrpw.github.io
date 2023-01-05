// video player

var player = new function(){
  var self = this;
  this.video = document.getElementsByClassName('video')[0];
  this.controls = {
    play: document.getElementsByClassName('play-button')[0],
    playbar: document.getElementsByClassName('playbar')[0],
    progressBar: document.getElementsByClassName('progress')[0],
    timeElapsed: document.getElementsByClassName('elapsed-time')[0],
    bookmarks: document.getElementsByClassName('markers')[0]
  }
  this.play = function(){
    this.video.paused ? this.video.play() : this.video.pause();
    document.getElementsByClassName('active-panel')[0].getElementsByTagName('input')[0].focus();
  }
  this.updateElapsedTime = function(){
    this.controls.timeElapsed.innerHTML = Math.round(this.video.currentTime);
  }
  this.offsetToTime = function(offset){
    var offsetRatio = offset / self.controls.playbar.getBoundingClientRect().width;
    return self.video.duration * offsetRatio;
  }
  this.updateProgressBar = function(){
    var progress = (self.video.currentTime / self.video.duration) * 100;
    var translation = - (100 - progress);
    self.controls.progressBar.style.transform = 'translateX(' + translation + '%)';
  }
  this.startScrub = function(e){
    window.addEventListener('mousemove', self.scrub);
    window.addEventListener('mouseup', self.endScrub);
  }
  this.scrub = function(e){
    e.preventDefault();
    self.video.currentTime = self.offsetToTime(e.offsetX);
  }
  this.endScrub = function(){
    window.removeEventListener('mousemove', self.scrub);
  }

  //event listeners

  this.controls.play.addEventListener('click', function(){
    player.play();
  });

  this.controls.playbar.addEventListener('mousedown', self.startScrub);

  this.controls.playbar.addEventListener('click', function(e){
    var clickOffset = e.offsetX;
    var playbarWidth = e.target.getBoundingClientRect().width;
    console.log( clickOffset / playbarWidth);
    self.video.currentTime = self.offsetToTime(e.offsetX);
  });

  this.video.addEventListener('timeupdate', function () {
    requestAnimationFrame(self.updateProgressBar);
    // self.updateElapsedTime();
  });

};

// app stuff

var user = {
  name: 'User Name'
}

var panels = {
  app: document.getElementsByClassName('app')[0],
  canvas: document.getElementsByClassName('canvas')[0],
  commentListing: document.getElementsByClassName('comments-panel-body')[0],
  noteListing: document.getElementsByClassName('notes-panel-body')[0]  
}

var controls = {
  transcriptToggle: document.getElementsByClassName('transcript-toggle')[0],
  sidebarToggles: document.getElementsByClassName('panel-control')
}

var inputs = {
  comment: document.getElementsByClassName('comment-input')[0],
  note: document.getElementsByClassName('note-input')[0]
}

var typingTimeout; 

function getAncestor(element, className){
  while ((element = element.parentElement) && !element.classList.contains(className));
  return element;
};

for(var i = 0; i < controls.sidebarToggles.length; i++){
  controls.sidebarToggles[i].addEventListener('click', function(){
    var sidebarPanels = document.getElementsByClassName('sidebar-panel');
    var panel = this.getAttribute('data-panel');

    for(var i = 0; i < controls.sidebarToggles.length ; i++){
      controls.sidebarToggles[i].classList.remove('active');
    };

    for(var i = 0; i < sidebarPanels.length; i++){
      sidebarPanels[i].classList.remove('active-panel');
    };

    this.classList.add('active');
    document.getElementsByClassName(panel)[0].classList.add('active-panel');    
  });
};

function convertNoteToComment(note){ 
  var timestamp = note.querySelector('.timestamp').innerText;
  var bodyText = note.querySelector('.body').innerText;
  console.log(bodyText);
  createThread( user.name, bodyText, timestamp);
  note.parentElement.removeChild(note);
}

function createCommentMenu(){

  var menu = document.createElement('div');
  menu.classList.add('comment-options');

  var list = document.createElement('ul');
  list.classList.add('options-menu');
  menu.appendChild(list);

  var item1 = document.createElement('li');
  item1.classList.add('menu-item');
  item1.innerHTML = 'Add to Notes';
  list.appendChild(item1);

  var item2 = document.createElement('li');
  item2.classList.add('menu-item');
  item2.innerHTML = 'Create to-do';
  list.appendChild(item2);

  return menu;
}

// to replace createCommentMenu
function createContextMenu(type){

  var menu = document.createElement('div');
  menu.classList.add('menu-container');

  var list = document.createElement('ul');
  list.classList.add('options-menu');
  menu.appendChild(list);

  var item1 = document.createElement('li');
  item1.classList.add('menu-item');
  item1.innerHTML = 'Add to Notes';
  list.appendChild(item1);

  var item2 = document.createElement('li');
  item2.classList.add('menu-item');
  item2.innerHTML = 'Create to-do';
  list.appendChild(item2);

  switch(type){
    case 'note':
      var item = document.createElement('li');
      item.classList.add('menu-item');
      item.innerHTML = 'Test Item';
      list.appendChild(item);
      break;
  }  

  return menu;
}


function createCommentMarker(position){
  var marker = document.createElement('div');
  marker.classList.add('marker');
  marker.setAttribute('data-time', player.video.currentTime);
  marker.style.left = player.video.currentTime / player.video.duration * 100 + '%';
  marker.addEventListener('click', function(){
    player.video.pause();
    player.video.currentTime = parseInt(this.getAttribute('data-time'));
  });
  player.controls.bookmarks.appendChild(marker);  
}

function createComment(user, text, type){

  var comment = document.createElement('div');
  comment.classList.add('comment');

  var body = document.createElement('div');
  body.classList.add('comment-body');
  comment.appendChild(body);

  var author = document.createElement('div');
  author.classList.add('comment-author');
  author.innerHTML = user ? user : 'anonymous';
  body.appendChild(author);

  if(type && type === 'reply'){
    var content = document.createElement('div');
    content.classList.add('reply-input');
    content.contentEditable = 'true';
    content.addEventListener('blur', function(){      
      if(this.innerText === ''){
        var parentThread = getAncestor(this, 'thread');
        var parentComment = getAncestor(this, 'comment');
        parentThread.removeChild(parentComment);
      }
    });
    content.addEventListener('keypress', function(e){   
      console.log(e.charCode);
      if(e.charCode === 13){
        content.blur();
        window.getSelection().removeAllRanges();
        console.log('blurred')
      }
    })
    body.appendChild(content);
  } else{
    var content = document.createTextNode(text ? text : 'test');
    body.appendChild(content); 
  }

  return comment;  
}

function createTimestamp(time){
  var value = time ? 'blah' : player.video.currentTime;
    console.log('time', time);
  var timestamp = document.createElement('span');
  timestamp.classList.add('timestamp');
  timestamp.innerHTML = value;
  timestamp.addEventListener('click', function(){
    player.video.currentTime = parseInt(this.innerText);
  });
  return timestamp;
}

function createThread(user, text, time){

  var thread = document.createElement('div');
  thread.classList.add('thread');

  var header = document.createElement('div');
  header.classList.add('thread-header');
  thread.appendChild(header);  

  var timestamp = createTimestamp(time);
  header.appendChild(timestamp);  

  var options = document.createElement('button');
  options.classList.add('options-button');
  options.innerHTML = 'Options';
  options.addEventListener('click', function(){
    this.parentNode.classList.toggle('open-menu');
  });
  header.appendChild(options);

  var menu = createCommentMenu();
  header.appendChild(menu);

  var footer = document.createElement('div');
  footer.classList.add('thread-footer');
  thread.appendChild(footer);

  var reply = document.createElement('button');
  reply.classList.add('reply');
  reply.innerHTML = 'Reply';
  reply.addEventListener('click', function(){
    var comment = createComment(user.name, '', 'reply');
    thread.appendChild(comment);
    comment.getElementsByClassName('reply-input')[0].focus();
  });
  footer.appendChild(reply);  

  var comment = createComment(user, text);
  thread.appendChild(comment);

  createCommentMarker();

  panels.commentListing.appendChild(thread);
  inputs.comment.value = '';
};

function submitComment(e){
  pauseWhileTyping();
  if(e.charCode === 13 && inputs.comment.value){ //if enter is pressed and not empty
    var commentText = inputs.comment.value;
    createThread(user.name, commentText); 
  }; 
};

function createNote(text){
  var note = document.createElement('div');
  note.classList.add('note');

  var timestamp = createTimestamp();
  note.appendChild(timestamp);  

  // temp for note => comment
  var button = document.createElement('button');
  button.innerText = 'Convert to Task';
  button.addEventListener('click', function(){
    convertNoteToComment(note);
  });
  note.appendChild(button);

  // var contextMenu = createContextMenu(note);
  // note.appendChild(contextMenu);

  var body = document.createElement('div');
  body.classList.add('body');
  body.innerHTML = text;
  body.contentEditable = 'true';
  note.appendChild(body);  

  panels.noteListing.appendChild(note);
  inputs.note.value = '';
}

function pauseWhileTyping(){
  if(!player.video.paused){
    panels.canvas.classList.add('typing');
    window.clearTimeout(typingTimeout);
    player.video.pause();
    typingTimeout = window.setTimeout( function(){
      player.video.play();
      panels.canvas.classList.remove('typing');
    }, 2000);  
  }
}

function submitNote(e){
  e.stopImmediatePropagation();
  pauseWhileTyping(); 
  if(e.charCode === 13 && inputs.note.value){ //if enter is pressed and not empty
    var noteText = inputs.note.value;
    createNote(noteText);
  }; 
};

inputs.comment.addEventListener('keypress', submitComment);
inputs.note.addEventListener('keypress', submitNote);
controls.transcriptToggle.addEventListener('click', function(){
  panels.app.classList.toggle('control-panel-expanded');
})

window.addEventListener('keydown', function(e){
  //check if modifier key is pressed
  if(e.shiftKey){
    //keyboard shortcuts
    switch(e.keyCode){
      case 39: //right arrow
        e.preventDefault();
        player.video.currentTime = player.video.currentTime + 1;
        break;
      case 37: //right arrow
        e.preventDefault();
        player.video.currentTime = player.video.currentTime - 1;
        break;
      case 32: //spacebar
        e.preventDefault();
        player.play();
        break;
    };    
  }
});