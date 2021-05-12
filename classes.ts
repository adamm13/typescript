// classes: supercharged object blueprint

class Stark {
  name: string = "Adam";
  static castle: string = "Winterfell"
  saying: string;

  constructor(){
    this.saying = "Winterfell!"
  }

  hello(person:string){  //method 
    console.log("hello, " +  person)
  }

}

var ned = new Stark();
ned.saying = "Winter is coming"
ned.hello("robert")

