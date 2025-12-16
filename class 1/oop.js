//oop
class car{

    constructor(){
        document.write("this is constructor method  <br>")
    }


    
    drive(){
        document.write("this is prototype method in stop <br>")
    }
     stop(){
        document.write("this is prototype method in stop <br>")
    }
    static hello(){
        document.write("this is static method <br>")
    }
}

let obj = new car()
let obj2 = new car()
obj.drive()
obj.stop()
car.hello() 