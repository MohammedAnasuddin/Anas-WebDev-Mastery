//> Properties can only be accessed by the class
//> Instances cannot access these properties


//Note: Can be called using ClassName.Static_property 


class Area{
    

   static getArea(r){
        return 3.14*r*r
    }
}

let circle = new Area()
// console.log(circle.getArea(5)) // not possible

console.log(Area.getArea(5)) //78.5
