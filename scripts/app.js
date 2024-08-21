//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

var cat = 1;

var Button = false;
function CAT() {
	console.log("worow");
	cat +++ 1;
	console.log(cat);
}
addEventListener("click", CAT);
