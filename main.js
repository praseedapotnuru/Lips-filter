function preload() {
	lips=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup() {
	canvas=createCanvas(500, 500);
	canvas.position(300, 200);
	video=createCapture(VIDEO);
	video.size(500, 500);
	video.hide();
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotpose);
}

function modelLoaded() {
	console.log('poseNet is initiallized and started');
}

nosex=0;
nosey=0;

function gotpose(result) {
	if(result.length>0) {
		console.log(result);
		nosex=result[0].pose.nose.x-40;
		nosey=result[0].pose.nose.y+40;
	}
}

function draw() {
	image(video, 0, 0, 500, 500);
	image(lips, nosex, nosey, 100, 45);
}

function snapp() {
	save('lips.png');
}