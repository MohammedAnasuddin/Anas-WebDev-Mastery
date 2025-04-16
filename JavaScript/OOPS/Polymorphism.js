//Tip: In a subclass constructor, you must call super() before using this — always.
class Shape {
    area(){ 
        return 0;
        
    }
}

class Circle extends Shape {

    constructor(r){
        super(); //x Throws a error if parent constructor is not called
        this.r = r;
    }
    area(){
        return Math.pi*(this.r*this.r);
    }
}

class Rectangle extends Shape{
    constructor(l,b){
        super();
        this.l = l;
        this.b = b;
    }
    area(){
        return this.l*this.b;
    }
}
