var five = require("johnny-five"),
    board, mirrorMotor;

board = new five.Board();

//The number of physical lasers we have
//Also the number of lines we project
var NUM_LASERS = 16;

board.on("ready", function() {

	console.log("Board ready!");

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