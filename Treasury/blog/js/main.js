var can;
var ctx;

var w;
var h;

var padLeft = 0;
var padTop = 0;

var girlWidth = 1900;
var girlHeight = 600;

var deltaTime;
var lastTime;

var girlPic = new Image();
var starPic = new Image();

var stars = [];
var num = 80;

var alive = 0;

var switchy = false;

function init() {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");
	can.width = document.body.clientWidth;
	can.height = document.body.clientHeight - 250;
	w = can.width;
	h = can.height;

	document.addEventListener('mousemove', mousemove, false);

	girlPic.src = "src/login_b.jpg";
	starPic.src = "src/star.png";

	for (var i = 0; i < num; i++) {
		stars[i] = new starObj();
		stars[i].init();
	}

	lastTime = Date.now();
	gameLoop();
}

function gameLoop() {
	window.requestAnimFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	fillCanvas();
	drawGirl();

	drawStars();

	aliveUpdate();
}

function fillCanvas() {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
	//ctx.drawImage(girlPic, padLeft, padTop, girlWidth, girlHeight);
	ctx.drawImage(girlPic,0,0);
}

function mousemove(e) {
	if (e.offsetX || e.layerX) {

		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;

		if (px > padLeft && px < (padLeft + girlWidth) && py > padTop && py < (padTop + girlHeight)) {
			switchy = true;
		} else {
			switchy = false;
		}
	}
}