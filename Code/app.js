
var five  = require("johnny-five"),
    fs    = require('fs'),
    png   = require('png-js'),
    board, 
    mirrorMotor,
    image = null;

//The number of physical lasers we have
//Also the number of lines we project
var NUM_LASERS = 16;


board = new five.Board();

board.on("ready", function() {

	console.log("Board ready!");

  this.repl.inject({
    loadImage : loadImage
  });

  //The motor that the mirror is attached to
  mirrorMotor = new five.Motor({
    pin: 3
  });

  // event handlers on start and stop
  mirrorMotor.on("start", function( err, timestamp ) {
    console.log( "started", timestamp );
  }); 

  mirrorMotor.on("stop", function( err, timestamp ) {
    console.log( "stopped", timestamp );
  });

});

//Load the image
var loadImage = function(filename){

  var path = __dirname + "/" + filename;

  console.log("Loading : " + path);

  try {
    image = png.load(path);
  }
  catch (e) {
    console.log("Error in loadImage : " + e);
  }
};
