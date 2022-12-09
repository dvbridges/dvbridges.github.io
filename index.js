const modelViewerColor = document.querySelector("model-viewer#model");

document.querySelector('#color-picker').addEventListener('change', (event) => {
  const colorString = event.target.value;
  const [material] = modelViewerColor.model.materials;
  material.pbrMetallicRoughness.setBaseColorFactor(colorString);
});

