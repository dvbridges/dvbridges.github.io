// const modelViewerColor = document.querySelector("model-viewer#model");

// document.querySelector('#color-picker').addEventListener('change', (event) => {
//   const colorString = event.target.value;
//   const [material] = modelViewerColor.model.materials;
//   material.pbrMetallicRoughness.setBaseColorFactor(colorString);
// });

function openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  console.log("box open")
  let menu = document.getElementById("openSidebarMenu");
  menu.style.width = "250px";
}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "0";
}