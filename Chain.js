class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        strokeWeight(4);
        stroke("blue");
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }