import { getDice } from './requests.js';

function isArrayInArray(arr, item){
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function(ele){
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
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

const kitchen = [[19, 19], [20, 19], [21, 19], [22, 19], [23, 19], [19, 20], [20, 20], [21, 20],
[22, 20], [23, 20], [24, 20], [19, 21], [20, 21], [21, 21], [22, 21], [23, 21], [24, 21], [19, 22], [20, 22], [21, 22], [22, 22], [23, 22],
[24, 22], [19, 23], [20, 23], [21, 23], [22, 23], [23, 23], [24, 23], [19, 24], [20, 24], [21, 24], [22, 24], [23, 24], [24, 24]]

const dice_path_result = [[22, 8], [20, 8], [12, 7], [17, 3], [17, 9], [17, 6], [19, 9], [11, 8], [16, 4], [16, 7], [13, 8], [15, 11], [16, 10], [15, 8], [18, 7], [16, 13], [18, 10], [21, 9], [20, 7], [22, 7], [17, 2], [17, 5], [17, 8], [19, 8], [13, 7], [16, 3], [16, 9], [16, 6], [16, 12], [18, 9], [15, 10], [18, 6], [20, 9], [21, 8], [22, 9], [12, 8], [23, 8], [17, 4], [14, 8], [17, 7], [19, 7], [16, 5], [15, 9], [16, 8], [15, 12], [16, 11], [18, 8], [21, 7]]

// const kitchen_path = [
//   [19, 19], [24, 19], [24, 20], [25, 20], [25, 25], [19, 25], [19, 19]
// ]

const drawPins = (ctx, tileSize, pinCoord) => {

  const pinX = (pinCoord[0] * tileSize) + tileSize / 2;
  const pinY = (pinCoord[1] * tileSize) + tileSize / 2;
  ctx.beginPath();
  ctx.arc(pinX, pinY, tileSize / 2, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 2;
}

const drawGrid = (canvas, ctx, tileSize, highlightNum) => {

  for (let y = 0; y < canvas.width / tileSize; y++) {
    for (let x = 0; x < canvas.height / tileSize; x++) {
      // const parity = (x + y) % 2;
      const tileNum = x + canvas.width / tileSize * y;
      const xx = x * tileSize;
      const yy = y * tileSize;


      if (isArrayInArray(dice_path_result, [x, y])) {
        ctx.fillStyle = "rgba(225, 245, 144, 0.6)";
        ctx.fillRect(xx, yy, tileSize, tileSize);
      }

      if (BOARD_MATRIX[y][x] != 0) {
        ctx.strokeStyle = "black";
        ctx.strokeRect(xx, yy, tileSize, tileSize);

        if (tileNum === highlightNum) {
          ctx.fillStyle = "rgba(55, 175, 250, 0.4)";
          ctx.fillRect(xx, yy, tileSize, tileSize);
        }
      }

      if (tileNum === highlightNum) {
        ctx.fillStyle = "rgba(250,130,55, 0.1)";
        if (isArrayInArray(kitchen, [x, y])) {
          console.log("in kitchen");
          for (let i = 0; i < kitchen.length; i++) {
            const kxx = kitchen[i][0] * tileSize;
            const kyy = kitchen[i][1] * tileSize;
            ctx.fillRect(kxx, kyy, tileSize, tileSize);
          }
        }
      }

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
ctx.drawImage(img, 0, 0, 900, 900);

var pinCoord = [];
// ctx.drawImage(img, 0, 0);

const boardDiv = document.getElementById("board");
drawGrid(canvas, ctx, tileSize);
// document.body.style.display = "flex";
// document.body.style.alignItems = "flex-start";
boardDiv.appendChild(canvas);
// document.body.appendChild(canvas);
document.body.appendChild(status);

canvas.addEventListener("mousemove", evt => {
  event.target.style.cursor = "pointer";
  const tileX = ~~(evt.offsetX / tileSize);
  const tileY = ~~(evt.offsetY / tileSize);
  const tileNum = tileX + canvas.width / tileSize * tileY;

  if (tileNum !== lastTile) {
    lastTile = tileNum;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, 900, 900);
    drawGrid(canvas, ctx, tileSize, tileNum);
    drawPins(ctx, tileSize, pinCoord);
  }
  status.innerText = `  mouse coords: {${evt.offsetX}, ${evt.offsetX}}
  tile coords : {${tileX}, ${tileY}}, tile value: ${BOARD_MATRIX[tileY][tileX]}
  tile number : ${tileNum}`;
});

canvas.addEventListener("click", event => {
  status.innerText += "\n  [clicked]";
  const tileX = ~~(event.offsetX / tileSize);
  const tileY = ~~(event.offsetY / tileSize);
  pinCoord[0] = tileX;
  pinCoord[1] = tileY;
});


canvas.addEventListener("mouseout", event => {
  drawGrid(canvas, ctx, tileSize);
  status.innerText = "";
  lastTile = -1;
});

const diceButton = document.getElementById("dice");
// const diceButtonText = document.createTextNode("Roll the dice");
// diceButton.name = "diceButton";
// diceButton.style.alignContent = "left";
// diceButton.appendChild(diceButtonText);
// document.body.appendChild(diceButton);


diceButton.addEventListener("click", evt => {
  var diceResult = getDice()
  var data = diceResult.then((data) => {
    status.innerText += `\n   dice: ${data.dice}`
  });

})

const cardsDiv = document.getElementById("cards");
const test_cards = [
  "./assets/cards/CONSERVATORY.jpg", "./assets/cards/MISS_SCARLET.jpg", "./assets/cards/LEAD_PIPE.jpg",
  "./assets/cards/ROPE.jpg", "./assets/cards/REVOLVER.jpg"
];

for (var i = 0; i < test_cards.length; i++) {
  const new_card = document.createElement("img");
  new_card.id = `card_${i}`;
  new_card.className = "card";
  new_card.src = test_cards[i];
  console.log(new_card);
  cardsDiv.appendChild(new_card);
}