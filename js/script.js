var clickSound = document.getElementById('click');

var playButton = document.getElementById('play');
playButton.addEventListener('click', playClick, false);

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopClick, false);

var quarterNote = 500;
var tempo = setInterval(function(){clickSound.play();}, quarterNote);
clearInterval(tempo);

function playClick () {
	quarterNote = getBPM();
	tempo = setInterval(function(){clickSound.play();}, quarterNote);
}

function stopClick () {
	clearInterval(tempo);
}

function getBPM () {
	clearInterval(tempo);
	var bpm = document.getElementById('bpm');
	var bpmVal = parseInt(bpm.innerHTML, 10);
	quarterNote = Math.round(((60/bpmVal)*1000)*100000)/100000;
	return quarterNote;
}

var timer = null;
var delay = null;

var upButton = document.getElementById('up');
upButton.addEventListener('click', incrementOne, false);
upButton.addEventListener('mousedown', startIncrement, false);
upButton.addEventListener('mouseup', stopIncrement, false);

function startIncrement () {
	timer = setInterval(function(){increment();}, 120);
}

function stopIncrement () {
	clearInterval(timer);
}

function incrementOne () {
	delay = setTimeout(function() {increment();}, 0);
}

function increment () {
	var bpm = document.getElementById('bpm');
	var bpmVal = parseInt(bpm.innerHTML, 10);
	if(bpmVal < 208) {
		bpm.innerHTML = bpmVal + 1;
	}
}

var downButton = document.getElementById('down');
downButton.addEventListener('click', decrementOne, false);
downButton.addEventListener('mousedown', startDecrement, false);
downButton.addEventListener('mouseup', stopDecrement, false);

function startDecrement () {
	timer = setInterval(function(){decrement();}, 120);
}

function stopDecrement () {
	clearInterval(timer);
}

function decrementOne () {
	delay = setTimeout(function() {decrement();}, 0);
}

function decrement () {
	var bpm = document.getElementById('bpm');
	var bpmVal = parseInt(bpm.innerHTML, 10);
	if(bpmVal > 40) {
		bpm.innerHTML = bpmVal - 1;
	}
}