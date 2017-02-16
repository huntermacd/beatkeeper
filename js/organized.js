/**
* HELLO MY NAME IS HUNTER & THIS IS MY CODE
*/

// Global Variables
bpm = 120;
var quarterNote = 500;
var timer = null;
var delay = null;
var tempo;

// Global Functions
function getBPM() {
	clearInterval(tempo);
	var bpm = document.getElementById('bpm');
	var bpmVal = parseInt(bpm.innerHTML, 10);
	quarterNote = Math.round(((60/bpmVal)*1000)*100000)/100000;
	return quarterNote;
}

function playClick () {
	quarterNote = getBPM();
	tempo = setInterval(function(){clickSound.play();}, quarterNote);
}

function stopClick () {
	clearInterval(tempo);
}

function increment () {
	var bpm = document.getElementById('bpm');
	var bpmVal = parseInt(bpm.innerHTML, 10);
	if(bpmVal < 208) {
		bpm.innerHTML = bpmVal + 1;
	}
}

function startIncrement () {
	timer = setInterval(function(){increment();}, 120);
}

function stopIncrement () {
	clearInterval(timer);
}

function incrementOne () {
	delay = setTimeout(function() {increment();}, 0);
}

function decrement () {
	var bpm = document.getElementById('bpm');
	var bpmVal = parseInt(bpm.innerHTML, 10);
	if(bpmVal > 40) {
		bpm.innerHTML = bpmVal - 1;
	}
}

function startDecrement () {
	timer = setInterval(function(){decrement();}, 120);
}

function stopDecrement () {
	clearInterval(timer);
}

function decrementOne () {
	delay = setTimeout(function() {decrement();}, 0);
}

// DOM Elements
var clickSound = document.getElementById('click');
var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');
var upButton = document.getElementById('up');
var downButton = document.getElementById('down');

// Event Listeners
playButton.addEventListener('click', playClick, false);

stopButton.addEventListener('click', stopClick, false);

upButton.addEventListener('click', incrementOne, false);
upButton.addEventListener('mousedown', startIncrement, false);
upButton.addEventListener('mouseup', stopIncrement, false);

downButton.addEventListener('click', decrementOne, false);
downButton.addEventListener('mousedown', startDecrement, false);
downButton.addEventListener('mouseup', stopDecrement, false);

// Initialize
tempo = setInterval(function(){clickSound.play();}, quarterNote);
clearInterval(tempo);
