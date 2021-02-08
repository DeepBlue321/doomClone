function renderLevel(scene, ArrayOfObjects, w) {
  for (let i = 0; i < scene.length; i++) {
    if (ArrayOfObjects[scene[i].order]) {
      let sq = scene[i].record;

      const h = 500 * (80 / sq);

      ArrayOfObjects[scene[i].order].show(scene[i].rayE, w, h);
    }
  }
}
