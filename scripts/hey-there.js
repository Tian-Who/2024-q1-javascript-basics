//@ts-check
/** @type {HTMLElement} */
//@ts-ignore
let speak = document.getElementById("speak");

let WOW = 0;

let gotPast10 = false;

let gotPast50 = false;

speak.innerText = "Why are you in here??? WHO ARE YOU!?!??!??!?";

function stopTouchingME() {
	if (WOW == 10) {
		gotPast10 = true;
	} else if (WOW == 50) {
		(gotPast10 = false), (gotPast50 = true);
	} else if (WOW == 100) {
		(WOW = 0), (gotPast10 = false), (gotPast10 = false);
	}
	WOW++ + 1;
	if (gotPast10 === false && gotPast50 === false) {
		speak.innerText = "HEY STOP TOUCHING ME!!! >:[";
	} else if (gotPast10 == true) {
		speak.innerText = "YOU BETTER STOP!! >:[ >:[";
	} else if (gotPast50 == true) {
		speak.innerText = "STOP OR ELSE >:[ >:[ >:[";
	}

	console.log(WOW);
}

addEventListener("click", stopTouchingME);
