function getMessages(lang){
  return require("./messages/"+lang+".json");
}

module.exports = getMessages;
