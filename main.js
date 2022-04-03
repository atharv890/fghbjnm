text="";
modal="";
video="";
object="";
function setup(){
    canvas=createCanvas(500,440);
    canvas.position(500,250);
    video=createCapture(VIDEO);
   yo=document.getElementById("textbox").value;
   video.hide();
}
function submit(){
    modal=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelloaded(){
console.log("Model is loaded");
status1=true;
}
function draw(){
image(video,0,0,500,440);
if(status1==true){
    modal.detect(video,gotResults);
    for(i=0;i<object.length;i++){
        if(yo=object[i].label){
            document.getElementById("status1").innerHTML="Object matched";
        }
        if(yo =! object[i].label){
            document.getElementById("status1").innerHTML="Object not matched";
        }
    document.getElementById("status").innerHTML="Status: Objects detected";
       fill(250,0,0);
       stroke(0,0,250);
       text(object[i].label +" "+floor(object[i].confidence*100)+"%",object[i].x,object[i].y);
    noFill();
       rect(object[i].x,object[i].y,object[i].width,object[i].height);

    }
}
}
function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    object=results;
}
}