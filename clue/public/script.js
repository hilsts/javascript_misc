const drawGrid = (canvas, ctx, tileSize, highlightNum) => {
  for (let y = 0; y < canvas.width / tileSize; y++) {
    for (let x = 0; x < canvas.height / tileSize; x++) {
      const parity = (x + y) % 2;
      const tileNum = x + canvas.width / tileSize * y;
      const xx = x * tileSize;
      const yy = y * tileSize;

      if (tileNum === highlightNum) {
        ctx.fillStyle = "#f0f";
      }
      else {
        ctx.fillStyle = parity ? "#555" : "#ddd";
      }
      
      ctx.fillRect(xx, yy, tileSize, tileSize);
      ctx.fillStyle = parity ? "#fff" : "#000";
      ctx.fillText(tileNum, xx, yy);
    }
  }
};

const size = 26;
const canvas = document.createElement("canvas");
canvas.width = canvas.height = 900;
const ctx = canvas.getContext("2d");
ctx.font = "11px courier";
ctx.textBaseline = "top";
const tileSize = canvas.width / size;
const status = document.createElement("pre");
let lastTile = -1;

drawGrid(canvas, ctx, tileSize);
document.body.style.display = "flex";
document.body.style.alignItems = "flex-start";
document.body.appendChild(canvas);
document.body.appendChild(status);

canvas.addEventListener("mousemove", evt => {
  event.target.style.cursor = "pointer";
  const tileX = ~~(evt.offsetX / tileSize);
  const tileY = ~~(evt.offsetY / tileSize);
  const tileNum = tileX + canvas.width / tileSize * tileY;
  
  if (tileNum !== lastTile) {
    lastTile = tileNum;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(canvas, ctx, tileSize, tileNum);
  }
  
  status.innerText = `  mouse coords: {${evt.offsetX}, ${evt.offsetX}}
  tile coords : {${tileX}, ${tileY}}
  tile number : ${tileNum}`;
});

canvas.addEventListener("click", event => {
  status.innerText += "\n  [clicked]";
});

canvas.addEventListener("mouseout", event => {
  drawGrid(canvas, ctx, tileSize);
  status.innerText = "";
  lastTile = -1;
});