function loadLevel() {
  walls.push(new Wall(0, 0, can2.width, 0));
  walls.push(new Wall(can2.width, 0, can2.width, can2.height));
  walls.push(new Wall(can2.width, can2.height, 0, can2.height));
  walls.push(new Wall(0, can2.height, 0, 0));

  rect(200, 200, 10, 100);
  rect(200, 50, 10, 100);
  rect(200, 400, 10, 100);

  loadEnemies();
}

function loadEnemies() {
  enemies.push(new Enemy(400, 100));

  enemies.push(new Enemy(400, 400));

  enemies.push(new Enemy(400, 300));
}

function colisionWallBall() {
  for (let [index, ball] of balls.entries()) {
    for (let wall of walls) {
      if (
        isCircleLineIntersection(
          wall.a.x,
          wall.a.y,
          wall.b.x,
          wall.b.y,
          ball.position.x,
          ball.position.y,
          ball.r
        )
      ) {
        ball.death(index);
      }
    }
  }
}
