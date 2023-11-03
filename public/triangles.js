function createTriangles() {
	var canvas = document.getElementById('canvas');
	var gl = canvas.getContext('experimental-webgl');

	gl.clearColor(0.263, 0.749, 0.678, 1);
	gl.frontFace(gl.CWW);
	gl.enable(gl.CULL_FACAE);
	gl.cullFace(gl.BACK);


	//compile vertex shader
	var vsSource = 'attribute vec3 pos;' +
		'attribute vec4 col;' +
		'varying vec4 color;' +
		'void main(){' +
		'color = col;' +
		'gl_Position = vec4(pos*0.25, 1);}';
	var vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs, vsSource);
	gl.compileShader(vs);

	//compile FragmentShader

	var fsSource = 'precision mediump float;' +
		'varying vec4 color;' +
		'void main(){' +
		'gl_FragColor = color;' +
		'}';

	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs, fsSource);
	gl.compileShader(fs);

	//Link togehter into programm
	var prog = gl.createProgram();
	gl.attachShader(prog, vs);
	gl.attachShader(prog, fs);
	gl.linkProgram(prog);
	gl.useProgram(prog);

	//load vertex data into buffer
	//vertices for 2d geometry (triangle)EA3

	var vertices = new Float32Array(
		[	0, 0, 0,		//0
			0.8, -0.8, 0,	//1
			1, -0.8, 0,		//2
			2, 0, 0,		//3
			2.9, 0.9, 0,	//4
			3.5, 1.6, 0,	//5
			1, 0.75, 0,		//6
			0, 0, 0,		//7
			3, 1, 0,		//8
			0, 0, 0,		//9
			0.4, 0.3, 0,	//10
			0.2, 0.5, 0,	//11
			0.2, 1, 0,		//12
			-0.1, 1.35, 0,	//13
			-0.75, 1.35, 0,	//14
			-1.9, 1.5, 0,	//15
			-0.75, 1, 0,	//16
			-0.75, 1.35, 0,	//17
			-0.75, 1, 0,	//18
			-0.5, 0, 0,		//19
			0.2, 0.5, 0,	//20
			-0.5, 0, 0,		//21
			-0.5, -0.5, 0,	//22
			0, -1.1, 0,		//23
			0.25, -1.35, 0,	//24
			0, -1.1, 0,		//25
			0.05, -1.25, 0,	//26
			-0.05, -1.5, 0,	//27
			0.15, -1.75, 0,	//28
			0.1, -1.5, 0,	//29
			-0.05, -1.5, 0,	//30
			0.25, -1.35, 0,	//31
			0.65, -1.6, 0,	//32
			1.5, -2, 0,		//33
			0.65, -1.6, 0,	//34
			1.5, -2.35, 0,	//35
			2, -2.9, 0,		//36
			2.07, -2.65, 0,	//37
			1.45, -1.75, 0,	//38
			1.5, -2, 0,		//39
			1.45, -1.75, 0,	//40
			1, -1, 0,		//41
			1, -0.8, 0,		//42
			1.65, -2, 0	 	//43
		]);

	var colors = new Float32Array(
		[	0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1,
			0.4, 0.35, 0.85, 1
		]);


	var indices = new Uint16Array([
		0, 1, 2,
		0, 2, 3,
		0, 3, 4,
		0, 6, 4,
		6, 4, 5,
		0, 11, 19,
		0, 10, 11,
		11, 12, 19,
		19, 12, 13,
		19, 13, 17,
		17, 18, 19,
		17, 18, 15,
		19, 22, 0,
		22, 23, 0,
		23, 1, 0,
		1, 2, 41,
		1, 41, 23,
		24, 41, 40,
		24, 32, 40,
		34, 39, 38,
		34, 35, 39,
		39, 38, 43,
		39, 43, 35,
		43, 37, 35,
		35, 36, 37,
		25, 24, 41,
		23, 26, 24,
		26, 27, 24,
		27, 28, 29
	]);

	var vboPos = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vboPos);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

	//bind vertex Buffer to attribute variable
	var posAttrib = gl.getAttribLocation(prog, 'pos');
	gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(posAttrib);

	var vboCol = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vboCol);
	gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

	var colorAttrib = gl.getAttribLocation(prog, 'col');
	gl.vertexAttribPointer(colorAttrib, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(colorAttrib);

	var ibo = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
	ibo.numberOfElements = indices.length;


	//Clear framebuffer and render primitives
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawElements(gl.TRIANGLES, ibo.numberOfElements, gl.UNSIGNED_SHORT, 0);
 	gl.drawArrays(gl.LINE_STRIP,0, 43);



};
