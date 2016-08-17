var _ = require("./index");
var messages = _("test");

if(typeof _ !== "function"){
  console.error("Instead of an object " + typeof _ + " was returned");
  process.exit(1);
}

if( typeof _.supportedLanguages !== "object"){
  console.error("Imported object does not contain information about supported languages.");
  process.exit(1);
}

var messages_type = typeof messages;
if( messages_type !== "object"){
  console.error("Instead of an object " + messages_type + " was returned");
  process.exit(1);
}



var val = messages["key"];
if( val !== "value"){
  console.error("key property returned " + val + " instead of 'value'");
  process.exit(1);
}

console.log("All tests have passed");
process.exit(0);
