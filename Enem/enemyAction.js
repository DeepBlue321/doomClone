function enemyAction() {
  for (let enemy of enemies) {
    enemy.lookPl();
  }

  death();
}
