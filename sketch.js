// let backgroundColor = 255;

// let noiseOffset = 0.0;
// let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight); //(windowWidth, windowHeight)
  background(255, 153, 51); //(backgroundColor)
 
  
  colorPicker = createColorPicker(150);
  colorPicker.style('width', '100px');
  
  
  slider = createSlider(0, 80, 10);
  slider.style('height', '100px');
  
  drawGhostOutline(); 
  drawOutlineText();
  // drawGrid();

}

// function drawGrid() {
//   numCells = 100;
//   fillColor = 255;
//   for (let i = 0; i <= width;  i += width / numCells) {
//     for (let j = 0; j <= height; j += height /numCells) {     
//       rect (i, j, width / numCells, height / numCells);
//     }
//   }
// }

function drawGhostOutline () {
  stroke(0);
  strokeWeight(6);
  point(width * 0.5, height * 0.1);
  point(width * 0.4, height * 0.2);
  point(width * 0.4, height * 0.3);
  point(width * 0.3, height * 0.2);
  point(width * 0.2, height * 0.2);
  point(width * 0.1, height * 0.3);
  point(width * 0.2, height * 0.4);
  point(width * 0.3, height * 0.5);
  point(width * 0.3, height * 0.6);
  point(width * 0.2, height * 0.9);
  point(width * 0.3, height * 0.9);
  point(width * 0.4, height * 0.9);
  point(width * 0.5, height * 0.9);
  point(width * 0.6, height * 0.9);
  point(width * 0.7, height * 0.9);
  point(width * 0.8, height * 0.9);
  point(width * 0.7, height * 0.6);
  point(width * 0.7, height * 0.5);
  point(width * 0.8, height * 0.4);
  point(width * 0.9, height * 0.3);
  point(width * 0.8, height * 0.2);
  point(width * 0.7, height * 0.2);
  point(width * 0.6, height * 0.3);
  point(width * 0.6, height * 0.2);
}

function drawOutlineText() {
  textSize(12);
  strokeWeight()
  text('1 / 25', width * 0.5, height * 0.13);
  text('2', width * 0.4, height * 0.23);
  text('3', width * 0.4, height * 0.33);
  text('4', width * 0.3, height * 0.23);
  text('5', width * 0.2, height * 0.23);
  text('6', width * 0.1, height * 0.33);
  text('7', width * 0.2, height * 0.43);
  text('8', width * 0.3, height * 0.53);
  text('9', width * 0.3, height * 0.63);
  text('10', width * 0.2, height * 0.93);
  text('11', width * 0.3, height * 0.93);
  text('12', width * 0.4, height * 0.93);
  text('13', width * 0.5, height * 0.93);
  text('14', width * 0.6, height * 0.93);
  text('15', width * 0.7, height * 0.93);
  text('16', width * 0.8, height * 0.93);
  text('17', width * 0.7, height * 0.63);
  text('18', width * 0.7, height * 0.53);
  text('19', width * 0.8, height * 0.43);
  text('20', width * 0.9, height * 0.33);
  text('21', width * 0.8, height * 0.23);
  text('22', width * 0.7, height * 0.23);
  text('23', width * 0.6, height * 0.33);
  text('24', width * 0.6, height * 0.23);
}

function draw() {
  if (mouseIsPressed) {
    // background (220, 150, 0, 1); 
    // backgroundColor-= 0.5;
    // backgroundColor = 255;
    // stroke(250, 210, 50, 10);
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // strokeWeight(strokeWidth);

    // noiseOffset += 0.08;
    // strokeWidth = noise(noiseOffset) * 80;

  
    line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width - mouseX, height - mouseY, 
    //      width - pmouseX, height - pmouseY);
    // line(mouseX, height - mouseY, 
    //     pmouseX, height - pmouseY);
    // line(width - mouseX, mouseY, 
    //      width - pmouseX, pmouseY);

    stroke(colorPicker.color());
    val = slider.value();
    strokeWeight(val);
  }
}


// function drawGrid() {
//   numCells = 100;
//   fillColor = 255;
//   for (let i = 0; i <= width;  i += width / numCells) {
//     for (let j = 0; j <= height; j += height /numCells) {     
//       rect (i, j, width / numCells, height / numCells);
//     }
//   }
// }

function keyTyped () {
  if (key === 's') {
    saveCanvas('filename', 'png');
  }
  else if (key === 'c') {
    clear(); 
    createCanvas(windowWidth, windowHeight);;
    background(255, 153, 51);
    drawGhostOutline(); 
    drawOutlineText();
  }

  // beginShape(); 
  // for (let i = 0; i < array.length - 1; i++) {
  //   curveVertex(array[i][0], array[i][1])
  // }
  // endShape();
  
  return false;
}