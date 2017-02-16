// Beatkeeper
// Original code by Hunter MacDermut
// Code generously simplified by Wray Bowling (rgbk.org)
// Code re-complicated by Hunter MacDermut

// Global Variables
var timer;
var tempo = 120;
var playing = false;

// Global DOM Elements
// var el_click = document.getElementById('click');
var el_bpm = document.getElementById('bpm');
var el_play = document.getElementById('play');
var el_stop = document.getElementById('stop');
var el_up = document.getElementById('up');
var el_down = document.getElementById('down');
var el_up10 = document.getElementById('up10');
var el_down10 = document.getElementById('down10');

click_sound = new Sound("audio/click.mp3");

// Global Functions
function render(){
    el_bpm.innerHTML = tempo;
}

function click(){
    click_sound.pause();
    click_sound.currentTime = 0;
    click_sound.play();
}

function start(sound){
    clearInterval(timer);
    timer = setInterval(click(sound), Math.round(((60/tempo)*1000)*100000) / 100000);
}

function stop(){
    clearInterval(timer);
    click.pause();
}

function increment(){
    if (tempo < 208) {
        tempo += 1;
    }
    start();
    render();
}

function decrement(){
    if (tempo > 40) {
        tempo -= 1;
    }
    start();
    render();
}

function increment10(){
    if (tempo > 198) {
        tempo = 208;
    } else if (tempo <= 198) {
        tempo += 10;
    }
    start();
    render();
}

function decrement10(){
    if (tempo < 50) {
        tempo = 40;
    } else if (tempo >= 50) {
        tempo -= 10;
    }
    start();
    render();
}

// Event Listeners
el_play.addEventListener("click", function(){ start(click_sound); }, false);

// el_play.addEventListener('click', start, false);
el_stop.addEventListener('click', stop, false);
el_up.addEventListener('click', increment, false);
el_down.addEventListener('click', decrement, false);
el_up10.addEventListener('click', increment10, false);
el_down10.addEventListener('click', decrement10, false);

// Initialize
render();