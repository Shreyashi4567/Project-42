const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,umbrella,rain,thunder;
//To create an array-drops which is now empty:-
var drops=[];
var maxDrops=100;
var thunder1,thunder2,thunder3,thunder4;
function preload()
{
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}
function setup()
{
    createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    umbrella = new Umbrella(100,520,400,400);
    //To make drops using array-drops:-
    for(var i=0;i<maxDrops;i++)
    {
        drops.push(rain = new Rain(random(0,400),random(0,400),10));
    }
}
function draw()
{
    background(0);
    Engine.update(engine);
    umbrella.display();
    if(frameCount%100===0)
    {
        rain.display();
        rain.update();
    }
    createDrop();
    drawSprites();
}
function createDrop()
{
    if(frameCount%100===0)
    {
        var thunder = createSprite(random(50,400),0,50,50);
        thunder.lifetime = 100;
        var rand = Math.round(random(1,4));
        switch(rand) {
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default:break;
        }
    }
}