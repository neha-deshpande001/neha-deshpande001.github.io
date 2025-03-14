headings = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
clicked = false
lower = -1
upper = -1

function setup() {

  // setup background
  canvas_size = 600
  createCanvas(canvas_size, canvas_size);
  angleMode(DEGREES);
  background(220);
  
  translate(width/2, height/2);

  side = width/2 * 0.75
  circle(0,0, side * 2);
  line(-side,0,side,0)
  line(0,-side,0,side)
  
  // trig to get diagonal lines
  len1 = cos(30) * side
  len2 = sin(30) * side
  line(-len1, -len2,len1,len2)
  line(-len2, -len1,len2,len1)
  line(len1, -len2,-len1,len2)
  line(len2, -len1,-len2,len1)

  
  // draw compass headings
  // make this a loop reading in [['N', -7], ..., [33, -10]]
  outside = -side * 1.05
  textSize(20);
  push(); // push/pop is sorta a context manager?
  fill(0)
  text('N', -7, outside);
  rotate(30);
  text('3', -7, outside);
  rotate(30);
  text('6', -7, outside);
  rotate(30);
  text('E', -7, outside);
  rotate(30);
  text('12', -10, outside);
  rotate(30);
  text('15', -10, outside);
  rotate(30);
  text('S', -7, outside);
  rotate(30);
  text('21', -10, outside);
  rotate(30);
  text('24', -10, outside);
  rotate(30);
  text('W', -7, outside);
  rotate(30);
  text('30', -10, outside);
  rotate(30);
  text('33', -10, outside);
  pop()
  
  let angle = random(1, 360);
  for (i=0; i < headings.length-1; i++){
    if(angle > headings[i] && angle <= headings[i+1]){
      lower = headings[i]
      upper = headings[i+1]
    }
  }
    
  fill(0)
  text("Click on " + int(angle) + " degrees.", -side * 1.2,-side * 1.2)
}

function reset(){
  setup()
  // background(100)
}
function mouseClicked(){
  if(clicked){
    clicked = false
    reset()
    return
  }
  angleMode(DEGREES);
  translate(width/2, height/2);

  x = mouseX - width/2
  y = mouseY - height/2
  
  // convert to polar coordinates to get angle
  theta = atan(y/x)
  if((x < 0 && y >= 0) || (x < 0 && y < 0)){
    theta += 180
  }
  if (x >= 0 && y < 0){
    theta += 360
  }
  
  // rotate by 90 degrees to make north up
  theta = int((theta + 90) % 360)
    
  // red/green if it's in the correct segment
  if(theta > lower && theta <= upper){
    fill(0,255,0)
  }
  else{
    fill(255,0,0)
  }
  // color in the segment, rotate by 90 degrees to make north up
  arc(0,0,side*2,side*2,int((lower - 90) % 360),int((upper - 90) % 360),PIE)

  clicked = true
  fill(0)
  text("Click anywhere to reset.", -side * 1.2,-side * 1.1)
}
  
// need draw() even though it's empty
function draw(){}