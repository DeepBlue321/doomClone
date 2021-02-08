function playerAction() {
  player.rotate(angle);

  player.moving();

  player.showGun();
  player.damage();
}
function collisionPlayerWall() {
  for (let i = 0; i < walls.length; i++) {
    if (
      isCircleLineIntersection(
        walls[i].a.x,
        walls[i].a.y,
        walls[i].b.x,
        walls[i].b.y,
        player.position.x + player.direction.x,
        player.position.y + player.direction.y,
        1
      )
    ) {
      return true;
    }
  }
}
