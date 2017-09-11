var fs = require("fs");

module.exports = BasicCard;

// constructor 
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {
        // flashcard object to be appended to file
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
        };
        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            //log the error if there is one
            if (error) {
                console.log(error);
            }
        });
    };
}