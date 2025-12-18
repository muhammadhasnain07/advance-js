class Electric_Car extends car{

    constructor(a,b){
        super(20, 40)
        this.num3 = a
        this.num4 = b
        document.write("this is constructor form child class <br>")
    }

    start(){
        super.start()
        document.write('tesla is starting ....from child class ', this.num3 + this.num4 , '<br>')
    }

    drive(){
        document.write("tesla is driving")
    }
}

let tesla = new Electric_Car(10, 40)
tesla.start()
tesla.drive()