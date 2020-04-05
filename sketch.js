var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  
  phase = 0;
  speed = 0.02;
  maxCircleSize = 8;
  numRows = 16;
  numCols = 100;
  numStrands = 3;
  
  colorA = color(173, 215, 255);
  colorB = color(156, 237, 215);
}

function draw() {
  background(38, 38, 38);
  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 3, numCols, 50, width);
      
      for(var row = 0; row < numRows; row += 1) {
        var y = height / 2.5 + row * 10 + sin(strandPhase + colOffset) * 100;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}