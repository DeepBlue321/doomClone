class Player {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.ray = [];
    this.focalLength = 60;
    this.heading = 0;
    this.speed = 10000;
    this.direction = new Vector(0, 0);
    this.life = 5;
    this.r = 10;

    for (let a = -this.focalLength / 2; a < this.focalLength / 2; a += 0.3) {
      let r = new Vector(
        1 * Math.cos(a * (Math.PI / 180)),
        1 * Math.sin(a * (Math.PI / 180))
      );
      this.ray.push(r);
    }
  }
  showGun() {
    ctx2.drawImage(gunImg, 0, can2.height - 400, 400, 400);
  }

  rotate(angle) {
    this.heading += angle;

    let index = 0;
    for (let a = -this.focalLength / 2; a < this.focalLength / 2; a += 0.3) {
      this.ray[index].x = 1 * Math.cos(a * (Math.PI / 180) + this.heading);
      this.ray[index].y = 1 * Math.sin(a * (Math.PI / 180) + this.heading);

      index++;
    }
  }
  moving() {
    if (keyPressed[65]) {
      this.direction.x = 1 * Math.cos(this.heading - Math.PI / 2);
      this.direction.y = 1 * Math.sin(this.heading - Math.PI / 2);
    }

    if (keyPressed[83]) {
      this.direction.x = -1 * Math.cos(this.heading);
      this.direction.y = -1 * Math.sin(this.heading);
    }
    if (keyPressed[68]) {
      this.direction.x = 1 * Math.cos(this.heading + Math.PI / 2);
      this.direction.y = 1 * Math.sin(this.heading + Math.PI / 2);
    }
    if (keyPressed[87]) {
      this.direction.x = 1 * Math.cos(this.heading);
      this.direction.y = 1 * Math.sin(this.heading);
    }
    if (!collisionPlayerWall()) {
      this.direction.x * this.speed;
      this.direction.y * this.speed;
      this.position = this.position.add(this.direction);
    }
  }
  damage() {
    for (let [index, ball] of balls.entries()) {
      if (
        isCircleCirkleIntersection(ball.position, this.position, ball.r, this.r)
      ) {
        this.life--;
        ball.death(index);
      }
    }
  }

  returnVisibleObjects(enemies) {
    let sceneObjects = [];

    for (let i = 0; i < this.ray.length; i++) {
      let informationObject = {
        record: Infinity,
        rayE: undefined,
        order: undefined
      };

      for (let [index, enemy] of enemies.entries()) {
        if (enemy.visible) {
          //  console.log(enemy.visible);
          let intersection = returnIntersectionLineCircle(
            this.position.x,
            this.position.y,
            this.ray[i].x + this.position.x,
            this.ray[i].y + this.position.y,
            enemy.position.x,
            enemy.position.y,
            enemy.r
          );

          if (intersection) {
            let dE = returnDinstance(this.position, intersection);

            informationObject.record = dE;
            informationObject.rayE = i;
            informationObject.order = index;

            sceneObjects.push(informationObject);
          }
        }
      }
    }
    sceneObjects = removeDuplicates(sceneObjects, "order");

    sceneObjects.sort((a, b) => b.record - a.record);

    //  console.log(sceneObjects);
    return sceneObjects;
  }

  returnSceneOfWalls(walls) {
    const scene = [];
    for (let i = 0; i < this.ray.length; i++) {
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        let point = returnIntersectionLineLine(wall, this.ray[i], this);

        if (point) {
          let d = returnDinstance(this.position, point);

          if (d < record) {
            record = d;
            closest = point;
          }
        }
      }

      scene[i] = record;
    }
    return scene;
  }
}
