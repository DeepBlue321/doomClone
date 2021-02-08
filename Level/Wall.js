class Wall {
  constructor(x1, y1, x2, y2) {
    this.a = new Vector(x1, y1);
    this.b = new Vector(x2, y2);
  }
  show() {
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

function rect(x, y, w, h) {
  walls.push(new Wall(x, y, x + w, y));
  walls.push(new Wall(x + w, y, x + w, y + h));
  walls.push(new Wall(x + w, y + h, x, y + h));
  walls.push(new Wall(x, y + h, x, y));
}

function renderWalls(sceneOfWalls, w) {
  for (let i = 0; i < sceneOfWalls.length; i++) {
    let sq = sceneOfWalls[i];
    let wSq = sceneW * 2;

    const b = mapInRange(sq, 0, wSq, 255, 0);

    const h = sceneH * (80 / sceneOfWalls[i]);

    ctx2.fillStyle = `rgb(${b},${b},${b})`;
    ctx2.fillRect(i * w + 1, sceneH / 2 - h / 2, w, h);
  }
}
