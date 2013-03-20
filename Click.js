function clickReporter(e) {
	var mousePos = getMousePos(c, e);
	mouse(mousePos.x, mousePos.y);
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
}