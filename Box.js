class Box{
//properties
constructor(x,y,width,height){
//make physics body 

this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height; 
World.add(world,this.body);


}


//functions
display(){

push()    
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)  
fill("yellow");    
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}


}