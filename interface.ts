//interface: a blueprint for an object
//setting a custom type
interface Stark {
  name: string;
  age?: number; //optional parameter ?
}
function printName(stark : Stark) {
  console.log(stark.name)
}

printName({name:"adam"});
printName({name:"joe"});
