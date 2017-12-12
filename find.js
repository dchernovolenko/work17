var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth*Math.random();
var targetY = boxHeight*Math.random();


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

console.log( "tx " + targetX );
console.log( "ty: " + targetY);
//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var xs = x0-x1
  var ys = y0-y1
  var c = Math.sqrt(xs*xs + ys*ys);

  return c;
};


var findIt = function(e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    halfdist = distance(boxHeight,boxWidth,targetX,targetY)
    dist = distance(targetX,targetY,mouseX,mouseY)/halfdist
    dist = 255 - Math.floor(dist*255)
    box.style.backgroundColor =rgb(dist, 0 ,0)
}

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }

box.addEventListener("mousemove", findIt);
