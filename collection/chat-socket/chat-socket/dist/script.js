const socket = io('https://webclin-backend.herokuapp.com');
const language = navigator.language || navigator.userLanguage;
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; 

const toggleFullScreen = () => {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

document.getElementById("profile").addEventListener("click", () => toggleFullScreen());

const socketEmit = (data) => {
  socket.emit('data', data);
};

const uuid = (() => {
  let seed = Date.now();
  if (window.performance && typeof window.performance.now === "function") {
      seed += performance.now();
  }
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (seed + Math.random() * 16) % 16 | 0;
      seed = Math.floor(seed/16);
      return (c === 'x' ? r : r & (0x3|0x8)).toString(16);
  });
  return uuid;
})();

let onlineUsers = [];

let myRandomName = {}
const createMyName = (() => {
  let fakeNames = {};
  const json = {
    names: ["Alan Bedoura De Pinto","Alan Brado","Alan Bida do Rego","Alê Itada","Ana Konda","Armando Botelho Pinto","Armando Pinto","Aron Bado","Balan Sarrola","Beijamin Arrola","Botelho Kunavara","Botelho Pinto","Caio Pinto","Caio Rolando da Rocha","Crispin Tudo","Cuca Areka","Cuca Beludo","Dayde Costa","Davi Agra","Déssio Pinto","Diva Aginaberta","Dr. Castro Pinto","Elba Tiúma","Ema Conieira","Eva Dias","Eva Gabunda","H.Romeu Pinto","Henrique Cando","Isadora Bocchetti","Isadora Pinto","Jacinto Leite Aquino Rego","Jacinto Pinto","Jaem Rabei","Jalin Habey","Jamila Ambeiro Pinto","Julia Mello Pinto","Kelly Inguissa","Kemel Pinto","Kevin Mamar","Laís Correga Navara","Levi Adão","Licarco Ferro","Lucas Trado","Luma Madeira","Marco Zinho De Oliveira","Melbi Lau","Mia Regazza","Mila Ascaro","Mila Ambeiro","Mila Ambuza","Omar Telo","Oscar Aglio","Patricia De Paula Dentro","Paul Herguido","Paula Ambeno","Paula Ambido","Paula da Roça","Paula Dentro","Paula Nabussa","Paula Tejano","Patty Ingatar","Peri Kitho","Rolando Pinto","Sarah Pinto","Sávio Lado","Shana Berta","Sheila Meusako","Silas Cando","Simas Turbano","Sophie Zanall","Tais Condida","Tais Follando","Tasha Padona","Tati Komenno","Thais Melo Pinto","Thiago Zado","Tico Meria","Tim Habay","Tomas Turbano","Tommy Jado","Tommy Leite","Valemtim Terra","Vailin Rabar","Vanessa Fadinha","Vivara Grande","Yasmin Asbolla","Zeca Gado"]
  };
  fakeNames = json.names;
  myRandomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
  socketEmit({ id: uuid, event: 'enterInChat', name: myRandomName });
  const profile = document.getElementById("profile");
  const profileField = document.createElement("DIV");
  profileField.setAttribute("id", uuid);
  profileField.setAttribute("class", "name");
  profileField.innerHTML = `<i class="far fa-user"></i> ${myRandomName}`;
  profile.appendChild(profileField);
})();

let emoticonList = {};
const createEmoticonList = (() => {
  emoticonList = {
    "=)": "😀","=/": "😕","8)": "🙂","8(": "☹️","=p": "😜",";)": "😉","S2": "😍","8p": "🤪","=|": "😐","8|": "😲"
  }
})();

const addPopover = (elementId, msg) => {
  const el = document.getElementById(elementId);
  const popover = document.createElement("DIV");
  const popoverText = document.createElement("P");
  const popoverArrow = document.createElement("DIV");
  const popoverTextNode = document.createTextNode(msg);
  popover.setAttribute("class", "popover");
  popoverArrow.setAttribute("class", "arrow-left");
  popoverText.appendChild(popoverTextNode);
  popover.appendChild(popoverArrow);
  popover.appendChild(popoverText);
  el.appendChild(popover);
  setTimeout(() => {
    popover.remove();
  }, 8000);
}

addPopover('messenger', 'Clique para deixar em tela cheia');

var converter = new showdown.Converter();
var simplemde = new SimpleMDE({
  autofocus: true,
  status: false,
  autosave: {
		enabled: true,
		uniqueId: 'simplemde',
		delay: 1000
	},
  placeholder: "Digite sua mensagem...",
  hideIcons: ["fullscreen", "preview", "guide", "side-by-side"],
  element: document.getElementById("message")
});

let whileWriting;
let sendBeginWriting = false;
simplemde.codemirror.on("change", () => {
  if(!simplemde.value()) return;
  if(!sendBeginWriting) {
    socketEmit({ id: uuid, event: 'beginWriting', name: myRandomName });
    sendBeginWriting = true;
  }
  if(whileWriting) {
    clearTimeout(whileWriting);
    whileWriting = null;
  }  
  whileWriting = setTimeout(() => {
    socketEmit({ id: uuid, event: 'endWriting', name: myRandomName });
    sendBeginWriting = false;
  }, 1000);
});

document.getElementById("emit").addEventListener("submit", (e) => {
  e.preventDefault();  
  const message = document.getElementById("message").value;
  if(!message) return;
  socketEmit({ id: uuid, event: 'endWriting', name: myRandomName });
  socketEmit({
    id: uuid,
    event: 'sendMessage',
    name: myRandomName,
    message: message,
    timestamp: moment()
  });
  simplemde.value('');
});
 
socket.on('data', (data) => {
  switch(data.event) {
    case 'enterInChat':
      enterInChat(data);
      break;
    case 'beginWriting':
      beginWriting(data);
      break;
    case 'endWriting':
      endWriting(data);
      break;
    case 'sendMessage':
      sendMessage(data);
      break;
    case 'stillOnline':
      stillOnline(data);
      break;
  }
});

const enterInChat = (data) => {
  if(uuid === data.id) return;
  const users = document.getElementById("users");
  const userField = document.createElement("DIV");
  userField.setAttribute("id", data.id);
  userField.innerHTML = `<i class="far fa-user"></i> ${data.name}`;
  users.appendChild(userField);
};

const beginWriting = (data) => {
  if(uuid === data.id) return;
  const history = document.getElementById("history");

  const msg = document.createElement("LI");
  const msgBox = document.createElement("DIV");
  const msgUserInfo = document.createElement("DIV");

  const msgTextUserInfo = document.createTextNode(`${data.name} está escrevendo...`);

  msg.setAttribute("id", data.id);
  msg.setAttribute("class", "writingMessage");
  
  msgBox.setAttribute("class", "msgBox");
  
  msgUserInfo.setAttribute("class", "msgUserInfo");
  msgUserInfo.appendChild(msgTextUserInfo);
  
  msgBox.appendChild(msgUserInfo);
  
  msg.appendChild(msgBox);
  history.appendChild(msg);

  history.scrollTo(0,history.scrollHeight);
};

const endWriting = (data) => {
  if(uuid === data.id) return;  
  const writingMessage = document.querySelectorAll(".writingMessage");
  writingMessage.forEach((e, i) => {
    if(data.id !== e.id) return;
    e.parentNode.removeChild(e);
  });
};

const sendMessage = (data) => {
  const history = document.getElementById("history");

  const msg = document.createElement("LI");
  const msgBox = document.createElement("DIV");
  const msgArrow = document.createElement("DIV");
  const msgUserInfo = document.createElement("DIV");
  const msgContent = document.createElement("DIV");
  const msgDate = document.createElement("DIV");

  const msgTextUserInfo = document.createTextNode(data.name);
  const msgTextContent = document.createTextNode(data.message);
  const msgTextDate = document.createTextNode(moment(data.timestamp).locale(language).tz(timezone).format('llll'));

  msg.setAttribute("id", data.id);
  uuid === data.id && msg.classList.add("myMsgBox");
  uuid === data.id ? msgArrow.setAttribute("class", "arrow-right") : msgArrow.setAttribute("class", "arrow-left");

  msgBox.setAttribute("class", "msgBox");
  msgUserInfo.setAttribute("class", "msgUserInfo");
  msgContent.setAttribute("class", "msgContent");
  msgDate.setAttribute("class", "msgDate");

  msgUserInfo.appendChild(msgTextUserInfo);
  msgContent.appendChild(msgTextContent);
  msgDate.appendChild(msgTextDate);

  msgBox.appendChild(msgArrow);
  msgBox.appendChild(msgUserInfo);
  msgBox.appendChild(textToEmoticon(msgContent));
  msgBox.appendChild(msgDate);

  msg.appendChild(msgBox);
  history.appendChild(msg);

  history.scrollTo(0,history.scrollHeight);
};

const textToEmoticon = (msgText) => {  
  let msgTextContentWithEmoticons = msgText.innerHTML;
  Object.entries(emoticonList).forEach(([key, value]) => {
    msgTextContentWithEmoticons = msgTextContentWithEmoticons.split(String(key)).join(String(value));
  });
  msgText.innerHTML = converter.makeHtml(msgTextContentWithEmoticons);
  return msgText;
}

const stillOnline = (data) => {
  let checkUserInList = onlineUsers.filter((e) => e.id === data.id)
  if(checkUserInList.length > 0) {
    checkUserInList.map((e) => e.timestamp = data.timestamp);
  } else {
    onlineUsers.push(data);
  }
};

setInterval(() => {
  socketEmit({ id: uuid, name: myRandomName, event: 'stillOnline', timestamp: moment() });
  let disconnectedUsers = onlineUsers.filter((e) => moment().diff(moment(e.timestamp), 'seconds') > 10);
  disconnectedUsers.map((e) => {
    const currentUsers = document.querySelectorAll('#users > div');
    currentUsers.forEach((userField) => {
      if(userField.id === e.id){
        userField.remove();
      }
    });
    onlineUsers.find((item, i) => {
      if(item) {
        if(item.id === e.id) {
          socketEmit({ id: e.id, name: e.name, event: 'sendMessage', message: 'Acabou de sair...', timestamp: moment() });
        }
        onlineUsers.splice(i, 1);
      }
    });
  });
  onlineUsers.map((e) => {
    const currentUsers = document.querySelectorAll('#users > div');
    currentUsers.forEach((userField) => {
      if(e.id !== uuid)
        if(userField.id !== e.id) {
          if(document.getElementById(e.id))
            document.getElementById(e.id).setAttribute("class", "leavingState");
        }
        else {
          document.getElementById(e.id).classList.remove("leavingState");
        }
    });
  });
}, 2000);