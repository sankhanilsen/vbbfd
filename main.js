noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
      poseNet.on('pose',gotPoses);

}
function draw(){
    background('#eb4634');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('#2133d1');
    stroke('#2133d1');
    square(noseX,noseY,diffrence);
}
function modelLoaded(){
    console.log('POSENET IS INITIALIZED');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+"noseY= " +noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
            diffrence=floor(leftWristX-rightWristX);
            console.log("leftWrist = "+leftWristX+" rightWrist = " +rightWristX+" diffrence = " +diffrence);

    }
}