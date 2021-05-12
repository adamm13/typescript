// types defined by colon
var n = 1;
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
var isWinter = false;
isWinter = 123;
var count = 5;
var name = "bran";
//array is a vector can contain one type of variable
var names = ["Jon", "Rick", "Bob"]; //any array type allows mutiple types
var Starks;
(function (Starks) {
    Starks[Starks["jon"] = 0] = "jon";
    Starks[Starks["bob"] = 1] = "bob";
    Starks[Starks["edgar"] = 2] = "edgar";
    Starks[Starks["catlyn"] = 3] = "catlyn";
})(Starks || (Starks = {}));
; //set of strings/ keys 
var cat = Starks.catlyn;
function getName() {
    console.log("winter is coming");
}
