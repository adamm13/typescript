// types defined by colon

var n : any = 1;

//types are important during compile-time

n = 'rob';

//be more strict with types
//any defeats the purpose of types.


// Basic Types

// Boolean
// Number
// String
// Array
// Enum
// Any 
// Void 

var isWinter: Boolean = false

isWinter = 123;

var count : Number = 5;
var name : String = "bran";

//array is a vector can contain one type of variable

var names : string[] = ["Jon", "Rick", "Bob"]  //any array type allows mutiple types

enum Starks {jon, bob, edgar, catlyn}; //set of strings/ keys 

var cat : Starks = Starks.catlyn;

function getName() : void{
  console.log("winter is coming")
}