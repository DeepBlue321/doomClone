class Enemy {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.r = 2;
    this.life = 3;

    this.po = 0;
    this.fov = 60;
    this.rays = [];

    this.visible = false;
    for (let a = -this.fov / 2; a < this.fov / 2; a += 10) {
      let r = new Vector(
        1 * Math.cos(a * (Math.PI / 180)),
        1 * Math.sin(a * (Math.PI / 180))
      );
      this.rays.push(r);
    }
  }

  show(i, w, h) {
    ctx2.drawImage(
      wizObr,
      320 + this.po,
      0,
      84,
      80,
      i * w - h / 2,
      sceneH / 2 - h / 2,
      h,
      h
    );
    this.po += 80;
    if (this.po > 400) {
      this.po = 0;
    }
  }
  attack() {
    balls.push(new Ball(this.position.x, this.position.y));
    //console.log("pud");
  }
  inter(wall, player, enemies) {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    const x3 = player.x;
    const y3 = player.y;
    const x4 = enemies.x;
    const y4 = enemies.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (den == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    if (t > 0 && t < 1) {
      if (u > 0 && u < 1) {
        return true;
      }
    } else {
      return false;
    }
  }
  lookPl() {
    for (let wall of walls) {
      if (this.inter(wall, player.position, this.position)) {
        this.visible = false;

        return;
      }
    }
    this.visible = true;
  }
}
