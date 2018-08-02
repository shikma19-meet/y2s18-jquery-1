// Write all your JavaScript and JQuery code in this file! :)

var x = 0; // rotation of X
var y = 0; // rotation of Y
var z = 0; // rotation of Z

function updateSize(newSize) {

  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
  $("#shikmasPic").css("width",newSize)


}

function updateRotation() {
  // FINISH ME! Set the rotation of the MEET logo based on the values of (x, y, z) (see above!)
  $("#shikmasPic").css("transform","rotateX("+x.toString()+"deg) rotateY("+y.toString()+"deg) rotateZ("+z.toString()+"deg)")

}

function updateXRotation(newX) {
  x = newX;
  updateRotation();
}

function updateYRotation(newY) {
  y = newY;
  updateRotation();
}

function updateZRotation(newZ) {
  z = newZ;
  updateRotation();
}