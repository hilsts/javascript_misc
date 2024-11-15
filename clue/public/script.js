async function fetchAsync (url) {
    let response = await fetch(url);
    let data = response.json();
    return data;
  }

function getDice () {
    const dice_url = 'http://127.0.0.1:8000/dice';
    dice_result = fetchAsync(dice_url);
    return dice_result
}

// const myCanvas = document.getElementById("myCanvas");
// const myctx = myCanvas.getContext("2d");
const img = document.getElementById("source");
// const width = (myCanvas.width = window.innerWidth);
// const height = (myCanvas.height = window.innerHeight);

// myctx.drawImage(img, dx=0, dy=0, dWidth=900, dHeight=900);
const s = 'start';
const d = 'door';

const BOARD_MATRIX = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, d, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, s, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, d, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, d, d, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, s, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, d, 1, 0, 0, 0, 0, 0, 1, 1, 1, d, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, d, 1, d, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, d, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, d, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, d, 1, 1, 1, 1, d, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, d, 1, 1, 1, 1, 0], 
    [0, s, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, d, 1, d, 0, 0, 0, 0, 0, 0, 0, 0, d, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  
]



const drawGrid = (canvas, ctx, tileSize, highlightNum) => {
  for (let y = 0; y < canvas.width / tileSize; y++) {
    for (let x = 0; x < canvas.height / tileSize; x++) {
      const parity = (x + y) % 2;
      const tileNum = x + canvas.width / tileSize * y;
      const xx = x * tileSize;
      const yy = y * tileSize;

    
      if (BOARD_MATRIX[y][x] != 0) {
        ctx.strokeRect(xx, yy, tileSize, tileSize);
        if (tileNum === highlightNum) {
            ctx.fillStyle = "#f0f";
            ctx.fillRect(xx, yy, tileSize, tileSize);
          }
      }
      
    //   ctx.fillStyle = parity ? "#fff" : "#000";
    //   ctx.fillText(tileNum, xx, yy);
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

// ctx.drawImage(img, 0, 0);

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
    ctx.drawImage(img, dx=0, dy=0, dWidth=900, dHeight=900);
    drawGrid(canvas, ctx, tileSize, tileNum);
  }
  
  status.innerText = `  mouse coords: {${evt.offsetX}, ${evt.offsetX}}
  tile coords : {${tileX}, ${tileY}}, tile value: ${BOARD_MATRIX[tileY][tileX]}
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

const diceButton = document.getElementById("dice");
diceButton.addEventListener("click", evt => {
    var diceResult = getDice()
    var data = diceResult.then((data) => {
        status.innerText += `\n   dice: ${data.dice}`
    });
    
} )