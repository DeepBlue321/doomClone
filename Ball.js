class Ball {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.po = 0;
    this.r = 10;
    this.visible = true;
    this.head = new Vector(
      player.position.x - this.position.x,
      player.position.y - this.position.y
    );
    this.mag = Math.sqrt(Math.pow(this.head.x, 2) + Math.pow(this.head.y, 2));
    this.vmag = 10;
    this.head.x = (this.head.x * this.vmag) / this.mag;
    this.head.y = (this.head.y * this.vmag) / this.mag;
    //  console.log(this.mag);
  }
  show(i, w, h) {
    ctx2.drawImage(
      ballImg,
      0 + this.po,
      0,
      100,
      100,
      i * w - h / 2,
      sceneH / 2 - h / 2,
      h,
      h
    );
    this.po += 100;
    if (this.po > 700) {
      this.po = 0;
    }
  }
  move() {
    this.position = this.position.add(this.head);
  }

  death(index) {
    balls.splice(index, 1);
  }
}
