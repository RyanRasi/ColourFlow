//colour Flow by Ryan Rasi
//https://github.com/RyanRasi

let x; //Picks random pixel across X axis
let y; //Picks random pixel across Y axis
let color; //Defines the colour at the specific X + Y axis coordinate
let img; //Image import
let i; //loop modifier

let fSlider, wSlider, hSlider; //Defines slider variables



function preload()  {
    img = loadImage("doggo.jpg"); //Initial laod of image
}

function setup()  {
  img.resize(windowWidth, 0); //Resizes image to fit window
  createCanvas(windowWidth, img.height); //Canvas made to fit image
  
  background(0, 0, 0); //Background set to 0
  
  //create sliders
  fSlider = createSlider(0, 1000, 500);
  fSlider.position(20, img.height + 20);
  wSlider = createSlider(0, 64, 16);
  wSlider.position(20, img.height + 40);
  hSlider = createSlider(0, 64, 16);
  hSlider.position(20, img.height + 60);

      
}

function windowResized() { //Window resize function
  resizeCanvas(windowWidth, img.height);
  img.resize(windowWidth, 0);
  fSlider.position(20, img.height + 20);
  wSlider.position(20, img.height + 40);
  hSlider.position(20, img.height + 60);

}


function draw()  { //Draw loop for the sldiers and the image
  
  const f = fSlider.value();
  const w = wSlider.value();
  const h = hSlider.value();
  
      for (i = 0; i < fSlider.value(); i++)  { //Loop for image ellipses, Also sets the "speed" to the first sliders value
    x = random(width); //Random coordinates chosen for colour declaration
    y = random(height);
    color = img.get(int(x), int(y));
    fill(color, 25); //Colour fills the ellipses with the chosen point in the image
    noStroke();
    ellipse(x, y, wSlider.value(), hSlider.value()); //Sets ellipses size to the values declared in the sliders

  }
  
}
//Image file sourced from https://www.what-dog.net/Images/faces2/scroll001.jpg