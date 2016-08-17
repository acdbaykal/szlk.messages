var supported = require("./supported_languages.json");

function getMessages(lang){
  return require("./messages/"+lang+".json");
}

getMessages.supportedLanguages = supported;

module.exports = getMessages;
