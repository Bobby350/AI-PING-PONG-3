function preload() {
	ball_touch_paddel = loadSound("ball_touch_paddel.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(600, 300)
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	instializeInSetup(pingpng);
}

function draw() {
	game()
}

function gotPoses(results) {
	if(results.length > 0) {
		noseX = results[0].pose.nose.X;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	}
}

function modelLoaded() {
	console.log('Model Loaded!');
}