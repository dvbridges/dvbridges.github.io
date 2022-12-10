// const modelViewerColor = document.querySelector("model-viewer#model");

// document.querySelector('#color-picker').addEventListener('change', (event) => {
//   const colorString = event.target.value;
//   const [material] = modelViewerColor.model.materials;
//   material.pbrMetallicRoughness.setBaseColorFactor(colorString);
// });

function openNav() {
  let elem = document.getElementById("sidebarMenu");
  let val = window
    .getComputedStyle(elem)
    .getPropertyValue('transform');
  console.log(val);

  if (val == 0) {
    elem.style.width = "-250px";
  } else {
    elem.style.width = "0";
  }
}

function closeNav() {
  document.getElementById("sidebarMenu").style.transform = "translateX(0)"
}