let speech;
let textField;
let button;
let list;
let utterance;
let voices;
window.onload = function(){
  button = document.querySelector(".speak");
  textField = document.querySelector(".utterance");
  list = document.querySelector(".list");
  utterance = new window.SpeechSynthesisUtterance();
  // if(window.speechSynthesis){
    speech = window.speechSynthesis;
  // }
  setTimeout(function(){
   voices = window.speechSynthesis.getVoices();
  createList([...voices],list);
  },100);
  
    button.addEventListener("click",function(){
    utterance.text=textField.value;
    speech.speak(utterance);
  });
  
  list.addEventListener("change",function(){
    voices.forEach(e => {
      if(e.voiceURI == list.value){
        utterance.voice = e;
      }
    });
    console.log(list.value);
  });
}

function createList(list,parent){
console.log(list);
  list.forEach(e => {
  console.log(e);
    let option = document.createElement("option");
    option.setAttribute("value",e.voiceURI);
    option.innerText = e.voiceURI;
    parent.appendChild(option);
  })
}