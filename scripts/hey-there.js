let WOW = 0;
let gotPast10 = false;
let gotPast50 = false;
console.log("Why are you in here??? WHO ARE YOU!?!??!??!?");
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
		console.log("HEY STOP TOUCHING ME!!! >:[");
	} else if (gotPast10 == true) {
		console.log("YOU BETTER STOP!! >:[ >:[");
	} else if (gotPast50 == true) {
		console.log("STOP OR ELSE >:[ ]>:[ >:[");
	}

	console.log(WOW);
}

addEventListener("click", stopTouchingME);
