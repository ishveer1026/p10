leftwx=0;
rightwx=0;
dif=0;
function preload(){
    img=loadImage("i.jpg");
}
function setup(){
    canvas=createCanvas(600, 600);
    canvas.position(850,80);
    video=createCapture(VIDEO);
    video.size(600,600)
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(img, 0,0,600,600);
    fill("blue");
    textSize(dif);
    text("Ishveer",25,400);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftwx=results[0].pose.leftWrist.x;
        rightwx=results[0].pose.rightWrist.x;
        dif=floor(leftwx-rightwx);
    }
}