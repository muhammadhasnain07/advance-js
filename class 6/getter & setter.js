class Temprature{
    #celsius;
    constructor(value){
        this.#celsius = value;

    }
    get mytem(){
        return this.#celsius
    }
    set mytem(value){
        if (value >-10 && value <= 70){
            this.#celsius = value;
            document.write(`${this.#celsius} °C this is setter method `)
        }
        else{
            document.write(`invalid value`)
        }
    }


}

let obj = new Temprature(50);
document.write(obj.mytem, '°C this is getter method <br>') //getter
obj.mytem = -11;