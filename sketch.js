// Global Variables 





var angle = 0 ; 
var slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4 , 0.01)
  
}

// Draw runs over and over. 
// 60 times per seceond. 
function draw() {
   
  background(51);
   resetMatrix();
//   line color 
    angle = slider.value()
  stroke(156)
  translate(200, height)
  level = 0 
//   line(x1, y1, x2, y2)
// height is a default variable that y1 means the bototm of the screen. 
  branch(100 , level, angle)
}


// argument to give to this function which is how long the tree is. 
function branch(len){
     line(0,0, 0, -len) 
      translate(0, -len) 
     
      if (len>4) {
         push()
      rotate(angle)  
      branch(len * 0.67)
    //   rotate to left 
    pop()
    push()
        rotate(-angle) 
      branch(len * 0.67)
      pop()
     
      print(level)

      } 
     
    

    
   
     
 
}



// keep track of the level and draw it with a different stroke. 
// variable number of branches. 
// variable number of angles. 