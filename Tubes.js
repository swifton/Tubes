var gLoop;

function generateConfiguration(w, h) {
	for (i = 0; i < width*2 - 1; i++) {
		type = i%2 - 1;
		for (j = 1; j < height + type + 1; j++){
			b = Math.floor(Math.random()*2);
			k = Math.floor(i/2) + 1;
			if (type == 0) { field[k][j][1] = b; field[k + 1][j][3] = b; }
			if (type == -1) { field[k][j][2] = b; field[k][j + 1][0] = b; }
		}
	}
}

function generateRotation(w, h) {
	for (i = 0; i < width; i++) {
		for (j = 0; j < height; j++) {
			b = Math.floor(Math.random()*4);
			for (k = 0; k < b; k++) {
				rotateClockwise(i + 1, j + 1);
			}
			check(i + 1, j + 1);
		}
	}
}

function rotateClockwise(i, j) {
	a = field[i][j][3];
	for (var k = 3; k > 0; k--) {
		field[i][j][k] = field[i][j][k - 1];
	}
	field[i][j][0] = a;
}

function check(i,j) {
	var b = 0;
	checkTile(i,j);
	checkTile(i + 1,j);
	checkTile(i,j + 1);
	checkTile(i - 1,j);
	checkTile(i,j - 1);
}

function checkWin() { 
var b = 1;
for (i = 1; i < width + 1; i++) {
	for (j = 1; j < height + 1; j++) {
		b *= win[i][j];
	}
}
if (b == 1) {alert("You win!");}
}

function checkTile(i,j) {
	var b = 1;
	if (field[i][j][0] == 1 && field[i][j - 1][2] == 0) {b = 0;}
	if (field[i][j][2] == 1 && field[i][j + 1][0] == 0) {b = 0;}
	if (field[i][j][1] == 1 && field[i + 1][j][3] == 0) {b = 0;}
	if (field[i][j][3] == 1 && field[i - 1][j][1] == 0) {b = 0;}
	win[i][j] = b;
}

function mouse(x,y) {
	i = Math.floor(x/diameter);
	j = Math.floor(y/diameter);
	rotateClockwise(i + 1,j + 1);
	redraw(i + 1,j + 1);
	check(i + 1,j + 1);
	checkWin();
}

function redraw(i,j) {
	drawRectangle((i - 1)*2*rad + 1, (j - 1)*2*rad + 1, 2*rad - 2, 2*rad - 2);
	k = i-1;
	l = j-1;
	if (field[i][j][0] == 1) {drawLine(k*2*rad + rad, l*2*rad + rad, k*2*rad + rad, l*2*rad);}
	if (field[i][j][1] == 1) {drawLine(k*2*rad + rad, l*2*rad + rad,k*2*rad + 2*rad, l*2*rad + rad);}
	if (field[i][j][2] == 1) {drawLine(k*2*rad + rad, l*2*rad + rad, k*2*rad + rad, l*2*rad + 2*rad);}
	if (field[i][j][3] == 1) {drawLine(k*2*rad + rad, l*2*rad + rad,k*2*rad, l*2*rad + rad);}
}

function draw() {
	rad = diameter/2;
	for (i = 0; i < width; i++) {
		for (j = 0; j < height; j++) {
			drawRectangle(i*2*rad + 1, j*2*rad + 1, 2*rad - 2, 2*rad - 2);
		}
	}
	for (k = 1; k < width + 1; k++) {
		for (l = 1; l < height + 1; l++) {
			i = k - 1;
			j = l - 1;
			if (field[k][l][0] == 1) {drawLine(i*2*rad + rad, j*2*rad + rad, i*2*rad + rad, j*2*rad);}
			if (field[k][l][1] == 1) {drawLine(i*2*rad + rad, j*2*rad + rad,i*2*rad + 2*rad, j*2*rad + rad);}
			if (field[k][l][2] == 1) {drawLine(i*2*rad + rad, j*2*rad + rad, i*2*rad + rad, j*2*rad + 2*rad);}
			if (field[k][l][3] == 1) {drawLine(i*2*rad + rad, j*2*rad + rad,i*2*rad, j*2*rad + rad);}
		}
	}
}

function newGame() {
	var textBox = document.getElementById('TEXTBOX_ID');
	var textBoxx = document.getElementById('TEXTBOX_IDD');
	
	width = parseInt(textBox.value);
	height = parseInt(textBoxx.value);
	c.width = width*diameter;
	c.height = height*diameter;
	
	field = new Array(width + 2);
	win = new Array(width + 2);
	field[0] = new Array(height + 2);
	win[0] = new Array(height + 2);
	
	reset(field, 0);
	reset(win, 1);
	
	generateConfiguration(width, height);
	generateRotation(width, height);
	
	clear();
	draw();
}

function GameLoop() {
	clear();
	draw();
	
	gLoop = setTimeout(GameLoop, 1000 / 200);
}

var field = new Array();
var win = new Array();

var width;
var height;	
var textBox = document.getElementById('TEXTBOX_ID');
var textBoxx = document.getElementById('TEXTBOX_IDD');
textBox.value = '8';
textBoxx.value = '8';

newGame();

//GameLoop();

c.addEventListener('mousedown', clickReporter, false);