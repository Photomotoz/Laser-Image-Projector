Laser-Image-Projector
=====================

Using Johnny-Five : https://github.com/rwaldron/johnny-five

The goal of this project is to build a laser projector.

This project uses an array of 16 lasers and a rotating mirror to project images onto a surface. 
The lasers reflect off from the rotating mirror, during the rotation of the mirror each laser will turn on and off 
to draw one line of the input image. 

It is possible to accomplish this same feat with a single laser with a mirror being rotated on two axes but it is 
difficult to have a single laser respond fast enough to render an entire image over a single set of rotations. 

Sources :
http://node-ardx.org/exercises/3
http://arduino.cc/en/tutorial/ShiftOut
