//@ts-check
/** @type {HTMLElement} */
//@ts-ignore

let speak = document.getElementById("speak");

speak.innerText = "Why are you in here??? WHO ARE YOU!?!??!??!?";

let WOW = 0;

let gotPast50 = false;

function gotPastCounter() {
	WOW++ + 1;
	if (WOW == 50) {
		gotPast50 = true;
	}

	console.log(WOW);
	if (gotPast50 === true && gotBox === true) {
		console.log("gotBox");
	} else if (gotPast50 === true) {
		speak.innerText = "fine";
	} else {
		PlayMessage();
	}
}
let messages = [
	0,

	1,

	2,
];

function PlayMessage() {
	let randomMessage = Math.floor(Math.random() * messages.length);

	if (randomMessage === 0) {
		speak.innerText = "HEY STOP TOUCHING ME!!! >:[";
	} else if (randomMessage === 1) {
		speak.innerText = "YOU BETTER STOP!! >:[ >:[";
	} else if (randomMessage === 2) {
		speak.innerText = "STOP OR ELSE >:[ >:[ >:[";
	}
	gotPastCounter;

	// console.log(randomMessage);
}

addEventListener("click", gotPastCounter);
//@ts-check
/** @type {HTMLElement} */
//@ts-ignore
let box = document.getElementById("box");

let gotBox = false;

box.innerText = "[_]";

function grabBox() {
	box.innerText = "";
	gotBox = true;
}

addEventListener("click", grabBox);
