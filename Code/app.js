
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

  //The motor that the mirror is attached to
  mirrorMotor = new five.Motor({
    pin: 3
  });

  this.repl.inject({
    loadImage : loadImage,
    startMotor : startMotor,
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

var startMotor = function(speed){

  if(speed < 0 || speed > 255){
    console.log("Error in startMotor : Entered speed is incorrect, valid range is 0-255");
  }

  mirrorMotor.start(speed);
};