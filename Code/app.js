
var five  = require("johnny-five"),
    fs    = require('fs'),
    png   = require('png-js'),
    board, 
    shiftRegister,
    mirrorMotor,
    imagePixels = null;

//The number of physical lasers we have
//Also the number of lines we project
var NUM_LASERS = 16;

//Flag controlling lasers
var lasersEnabled = false;

five.Board().on("ready", function() {

	console.log("Board ready!");

  shiftRegister = new five.ShiftRegister({
    pins: {
      data: 11,
      clock: 12,
      latch: 8
    }
  });


  //The motor that the mirror is attached to
  mirrorMotor = new five.Motor({
    pin: 3
  });

  this.repl.inject({
    loadImage : loadImage,
    startMotor : startMotor,
    toggleLasers : toggleLasers
  });
  
  this.loop(100, function() {

    if(lasersEnabled){

      if(imagePixels!=null){



      }
    }
  });
});

//Load the image
var loadImage = function(filename){

  var path = __dirname + "/" + filename;

  console.log("Loading : " + path);

  try {

    var image = png.load(path);

    image.decode(function(pixels){

      imagePixels = pixels;
    });

  }
  catch (e) {
    console.log("Error in loadImage : " + e);
  }
};

//Starts the motor at the given speed
var startMotor = function(speed){

  if(speed < 0 || speed > 255){
    console.log("Error in startMotor : Entered speed is incorrect, valid range is 0-255");
  }

  mirrorMotor.start(speed);
};

//Enabled the lasers
var toggleLasers = function(){

  lasersEnabled = !lasersEnabled;
};



