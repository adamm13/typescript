//a way for objects or classes to gain access to properties inside other objects/classes

class Person{
  name: string;
  constructor(name: string) {
    this.name = name
  }
  dance(){
    console.log(this.name + " is dancing")
  }
}

var bran = new Person("Bran")
bran.dance();

class AwesomePersone extends Person { //start with class that it is extending
  dance(){
    console.log("SO AMAZING")
    super.dance() //added to show "is dancing"
  }
}

var rob = new AwesomePersone("rob")
rob.dance();

//in TS when you ovverride a function it doesnt call the function in the class extended
//that is called a superfunction 