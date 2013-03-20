function reset(data, b){
	wid = data.length;
	hei = data[0].length;
	for (var i = 0; i < wid; i++){
		data[i] = new Array(hei);
		for (var j = 0; j < hei; j++){
			if (b == 0) {data[i][j] = [0,0,0,0];}
			if (b == 1) {data[i][j] = 1;}
		}
	}
	linesDeleted = 0;
	figuresReceived = 0;
}
