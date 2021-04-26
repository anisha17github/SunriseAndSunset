const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";
var Time;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    textSize(20)
    fill ("white")
    text("Time : "+Time ,width-200, 50)


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response1 = await response.json();
    var datetime = response1.datetime;
    console.log(response1);
    Time = datetime.slice(11,13);
    if(Time>=04 && Time<06){
        debugger; bg = "sunrise1.png"
    }else if(Time>=06 && Time<08){
       debugger; bg = "sunrise2.png"
    }else if(Time>=08 && Time<10){
        debugger; bg = "sunrise3.png"
    }else if(Time>=10 && Time<12){
        debugger; bg = "sunrise4.png"
    }else if(Time>=12 && Time<14){
        debugger; bg = "sunrise5.png"
    }else if(Time>=14 && Time<16){
        debugger; bg = "sunrise6.png"
    }else if(Time>=16 && Time<18){
        debugger; bg = "sunset7.png"
    }else if(Time>=20 && Time<22){
        debugger; bg = "sunset8.png"
    }else if(Time>=22 && Time<23){
        debugger; bg = "sunset9.png"
    }else if(Time>=23 && Time<0){
        debugger; bg = "sunset10.png"
    }else if(Time>=0 && Time<03){
        debugger; bg = "sunset11.png"
    }else {
        debugger; bg = "sunset12.png"
    }



    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);

}
