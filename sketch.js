// let backgroundColor = 255;

let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  drawGrid();
  createCanvas(600, 600); //(windowWidth, windowHeight)
  background(255, 255, 204); //(backgroundColor)

  stroke(255, 204, 0);
  strokeWeight(strokeWeight);

}

function draw() {
  if (mouseIsPressed) {
    background (220, 150, 0, 5); 
    // backgroundColor-= 0.5;
    strokeWeight(strokeWidth);

    noiseOffset += 0.08;
    strokeWidth = noise(noiseOffset) * 80;


    stroke(map(mouseX, 0, 600, 0, 255, true))
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
    saveCanvas('filename', 'png');
  }
  else if (key === 'c') {
    clear();
  }

  // beginShape(); 
  // for (let i = 0; i < array.length - 1; i++) {
  //   curveVertex(array[i][0], array[i][1])
  // }
  // endShape();
  
  return false;
}

function drawGrid() {
  numCells = 20;
  for (let i = 0; i <= width;  i += width / numCells); {
    for (let j = 0; j <= height; j += height /numCells); {
      rect (i, j, width / numCells, height / numCells);
    }
  }
}