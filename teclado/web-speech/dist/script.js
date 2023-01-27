'use strict';

const log = document.querySelector('.output_log');
const output = document.querySelector('.output_result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'es-MX';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

document.querySelector('button').addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('speechstart', () => {
  log.textContent = 'Speech has been detected.';
});

recognition.addEventListener('result', (e) => {
  log.textContent= 'Result has been detected.';

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  output.textContent = text;
  
  log.textContent = 'Confidence: ' + e.results[0][0].confidence;
});

recognition.addEventListener('speechend', () => {
  recognition.stop();
});

recognition.addEventListener('error', (e) => {
  output.textContent = 'Error: ' + e.error;
});

function synthVoice(text, lang) {
  const synth = window.speechSynthesis;  
  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = lang;
  utterance.text = text;
  synth.speak(utterance);
}

document.querySelector('.speak').addEventListener('click', () => {
  let i = document.querySelector('.es');
  let text = i.value || i.placeholder;
  synthVoice(text,'es-US');
});

document.querySelector('.speak_jp').addEventListener('click', () => {
  let i2 = document.querySelector('.jp');
  let text2 = i2.value || i2.placeholder;
  synthVoice(text2, 'ja-JP');
});