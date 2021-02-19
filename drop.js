class drop{
    constructor(x,y){
        var op={
           
            restitution:0.01,
            friction:0.1
            
        }
        this.body=Bodies.circle(x,y,30,op);
        this.x=x;
        this.y=y;
        this.r=30
        World.add(world,this.body)
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,100)})
        }
    }
    display(){
        var p=this.body.position
        
       translate(p.x,p.y);
        fill("blue")
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        
    }
}