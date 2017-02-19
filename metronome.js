var ctx = new (window.AudioContext || window.webkitAudioContext)();

var next = ctx.currentTime;
var tempo = 120;
var tempoDisplay = document.getElementById("bpm");
var subdivision = 4;
var amp = ctx.createGain();
var timer;
amp.gain.value = 1;

function play(time) {
  var osc = ctx.createOscillator();
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.frequency.value = 880.0;
  osc.start(time);
  osc.stop(time + 0.1);
}

function scheduler() {
  while (next < ctx.currentTime + 0.1) {
    var gap = (60.0 / tempo) * subdivision;
    next += 0.25 * gap;
    play(next);
  }
  timer = window.setTimeout(scheduler, 50.0);
}

function increment(){
  if (tempo < 208) {
    tempo += 1;
  }
  tempoDisplay.innerHTML = tempo;
}

function decrement(){
  if (tempo > 40) {
    tempo -= 1;
  }
  tempoDisplay.innerHTML = tempo;
}

function increment10(){
  if (tempo > 198) {
    tempo = 208;
  } else if (tempo <= 198) {
    tempo += 10;
  }
  tempoDisplay.innerHTML = tempo;
}

function decrement10(){
  if (tempo < 50) {
    tempo = 40;
  } else if (tempo >= 50) {
    tempo -= 10;
  }
  tempoDisplay.innerHTML = tempo;
}

// scheduler();
