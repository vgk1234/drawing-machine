let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  stroke(255, 204, 0);
  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed) {
    background (backgroundColor);
    backgroundColor-= 0.5;
    // stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, 
         width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX, height - mouseY, 
        pmouseX, height - pmouseY);
    line(width - mouseX, mouseY, 
         width - pmouseX, pmouseY);
  }
}

function keyTyped () {
  if (key === 's') {
    //save this image
    saveCanvas('filename', 'png')
  }

  // beginShape(); 
  // for (let i = 0; i < array.length - 1; i++) {
  //   curveVertex(array[i][0], array[i][1])
  // }
  // endShape();
  
  return false;
}