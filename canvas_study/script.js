const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// const im = document.getElementById("test")
var img = new Image();


const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(0 0 0)";
// ctx.fillRect(0, 0, width, height);

// ctx.fillStyle = "rgb(255 0 0)";
// ctx.fillRect(50, 50, 100, 150);

// ctx.fillStyle = "rgb(255 0 255 / 75%)";
// ctx.fillRect(25, 100, 175, 50);

// ctx.drawImage(im, 500, 500, 200, 200);

class Hexagon {
    constructor(x, y, r, a) {
      this.path = new Path2D()
      for (var i = a; i < a+Math.PI*2; i+=Math.PI/3) {
        this.path.lineTo(x + r * Math.cos(i), y + r * Math.sin(i));
      }
    }
  
    draw(evt) {
    // original code
    ctx.beginPath();
      var rect = canvas.getBoundingClientRect()
      var x = evt.clientX - rect.left
      var y = evt.clientY - rect.top
      ctx.fillStyle = ctx.isPointInPath(this.path, x, y) ? "red" : "green"
      ctx.fill(this.path)
    }
  }

img.onload = function() {
    var hex = new Hexagon(125+500, 100, 100, 0.52);
    var x = 125+500;
    var y = 100;
    ctx.save();
    ctx.beginPath();
    // const test = new Path2D();
    // test.addPath(hex.path);
    ctx.stroke(hex.path);
    ctx.clip();
    ctx.drawImage(img, x, y);
    
}
img.src = "https://pics.craiyon.com/2023-11-28/FivMSV6vT8iyNfHucLRxFg.webp";


//   shapes = []
//   shapes.push(new Hexagon( 50, 50, 40, 0))
//   shapes.push(new Hexagon(125+500, 100, 100, 0.52))
//   shapes.push(new Hexagon(300+500, 100, 100, 0.52))
//   shapes.push(new Hexagon(475+500, 100, 100, 0.52))
//   // second row prototype
//   shapes.push(new Hexagon(388+500, 252, 100, 0.52))
//   shapes.push(new Hexagon(388+500+175, 252, 100, 0.52))
//   shapes.push(new Hexagon(388-175+500, 252, 100, 0.52))
//   shapes.push(new Hexagon(388-175*2+500, 252, 100, 0.52))
//   shapes.push(new Hexagon(200, 50, 30, 0.8))
//   shapes.push(new Hexagon(275, 90, 53, 4.1))
  
//   canvas.addEventListener("mousemove", function(evt) {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       shapes.forEach((s) => s.draw(evt))
//     }
//   )
//   shapes.forEach((s) => s.draw({ clientX: 125+500, clientY: 100 }))

// for (var i = 0; i < shapes.length; i++) {
//     s = shapes[i];
//     s.ctx.clip();
//     s.ctx.drawImage(im);

// }
//   shapes.forEach((s) => s.ctx.clip())