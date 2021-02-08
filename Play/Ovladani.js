can2.addEventListener("mousemove", e => {
  angle = e.layerX + -can2.width / 2;

  angle = mapInRange(angle, -can2.width / 2, can2.width / 2, -0.05, 0.05);
});
document.addEventListener("keyup", e => {
  player.direction.x = 0;

  player.direction.y = 0;
  keyPressed[e.keyCode] = false;
});
document.addEventListener("keydown", e => {
  keyPressed[e.keyCode] = true;
});

can2.addEventListener("mousedown", e => {
  if (gunAu.paused) {
    // gunAu.play();
  } else {
    gunAu.currentTime = 0;
  }
  if (enemies.length > 0) {
    if (scope.tf != undefined) {
      if (enemies[scope.ind].visible) {
        enemies[scope.ind].life -= 1;
      }
    }
  }
});
