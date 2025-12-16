    // pascal convention
    // single inheritance
    class A{
        constructor(a,b){
            this.num1 = a
            this.num2 = b
        }

        star(){
            document.write(`this is start method from parent class ${this.num1 + this.num2} <br>`)
        }
        stop(){
            document.write(`this is stop method from parent class ${this.num1 * this.num2} <br>`)
        }
    }

    class B extends A{
        start(){
            super.start()
                document.write(`this is start method from child class B ${this.num1-this.num2} <br>`)
            
        }
        hello(){
            document.write("this is hello method from chid calss B <br>")
        }
    }