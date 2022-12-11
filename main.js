var up = document.getElementById("UP");
var down = document.getElementById("DOWN");
var str = "Click on button to change the background color";
    
up.innerHTML = str;
    
function changeColor(color) {
  document.body.style.background = color;
}

function Run() {
  changeColor('blue');
  down.innerHTML = "Background Color changed";
}		