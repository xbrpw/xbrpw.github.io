// AudioContext and analyser integration from Ali Görkem's 
// Pen "Audio Visualizer #3"
// https://codepen.io/agorkem/pen/PwyNOg/
// thanks dewd!

window.onload = function() {
  
  var audio,
      analyser,
      audioContext,
      sourceNode,
      stream;

  var text = document.getElementById("text");
  
  var width = window.innerWidth,
      height = window.innerHeight,
      maxHeight = height * 0.5,
      fftSize = 512, // 512
      c = 0;
  
  var audioInput = document.getElementById('audiofile');
  
  // choose file
  audioInput.addEventListener('change', function(event) {
    stream = URL.createObjectURL(event.target.files[0]);
    audio = new Audio();
    audio.src = stream;
    setup();
  });

  function setup() {
    audio.addEventListener('canplay', function () {
      document.body.className+='loaded';
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
      analyser = (analyser || audioContext.createAnalyser());
      analyser.minDecibels = -90;
      analyser.maxDecibels = -10;
      analyser.smoothingTimeConstant = 1;//0.75;
      analyser.fftSize = fftSize;

      sourceNode = audioContext.createMediaElementSource(audio);
      sourceNode.connect(analyser);
      sourceNode.connect(audioContext.destination);

      audio.play();
      update();
    });
  }

  function update() {
    var freqArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(freqArray);

    // clear coords
    var plot = 0;
    
    var average = 0;
    // for each frequency
    for (var i = 0; i < freqArray.length; i++) {
      average += freqArray[i];
    }
    average /= freqArray.length;
    var avgRatio = (average - 120) / (255 - 120);
    
    plot = avgRatio * 200;
    var xtra_plot = plot * 1.3;
    
    var color_spread = 20;
    var color_factor = (c % 360) / 360;
    var color_start = 40;
    var color_hue = color_start + (color_spread * color_factor);
      
    var max_fade = 30;
    var fade = max_fade - max_fade * avgRatio;
    var color = "hsl(" + color_hue + ",100%," + "60%)";
    var shadow = [
      "0px 0px " + fade + "px " + color,
      "0px " +  xtra_plot + "px " + fade + "px " + color,
      "0px " + -xtra_plot + "px " + fade + "px " + color,
       xtra_plot + "px 0px " + fade + "px " + color,
      -xtra_plot + "px 0px " + fade + "px " + color,
       plot + "px " +  plot + "px " + fade + "px " + color,
      -plot + "px " + -plot + "px " + fade + "px " + color,
       plot + "px " + -plot + "px " + fade + "px " + color,
      -plot + "px " +  plot + "px " + fade + "px " + color
    ];
    
    text.style.textShadow = shadow.join(",");
    text.style.fontSize = avgRatio * 100 + 20 + "px";
    

    c += 0.5;
    requestAnimationFrame(update);
  }
};

jakealbaughSignature("light");