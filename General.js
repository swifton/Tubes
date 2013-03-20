var c = document.getElementById('c'),
	ctx = c.getContext('2d');	
	
var diameter = 40;
	
function drawCircle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI, false);
	ctx.fillStyle = "black";
	ctx.fill();
}

function drawRectangle(x1, y1, dx, dy) {
	ctx.beginPath();
	ctx.fillStyle="#FF00ff";
	ctx.fillRect(x1, y1, dx, dy);
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
//	ctx.save();
//	ctx.translate(x1, y1); 
//	ctx.rotate(0.5);
//	var img = new Image();
//	img.src = "images/2.png";
//	ctx.drawImage(img, 0, 0); 
//	ctx.restore();
}
	
function clear() {
	ctx.fillStyle = '#ffffff';
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.rect(0, 0, c.width, c.height);
	ctx.closePath();
	ctx.fill();
}
