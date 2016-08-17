var test_json = require("./index")("test");

var type = typeof test_json;
if( type !== "object"){
  console.error("Instead of an object " + type + " was returned");
  process.exit(1);
}

var val = test_json["key"];
if( val !== "value"){
  console.error("key property returned " + val + " instead of 'value'");
  process.exit(1);
}

console.log("All tests have passed");
process.exit(0);
