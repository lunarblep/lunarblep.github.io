let setSize = () => {
  console.log("rez");
  let height =
    document.querySelector(".text").getBoundingClientRect().height * 1.5;
  let width =
    document.querySelector(".letter").getBoundingClientRect().width * 1.5;

  let scale = Math.min(window.innerHeight / height, window.innerWidth / width);
  console.log(scale);
  document.querySelector(".text").style.transform = `scale(${scale}, ${scale})`;
  document.querySelector("body").style.paddingTop = `${(window.innerHeight -
    height) /
    2}`;
};

let generateTextShadow = (i, color) => {
  let s = "";
  for (let j = 0; j < i; j++) {
    s += `${j}px `.repeat(2) + `${color},`;
    s += `${j}.25px `.repeat(2) + `${color},`;
    s += `${j}.5px `.repeat(2) + `${color},`;
    s += `${j}.75px `.repeat(2) + `${color},`;
  }
  return s;
};

let resizeTimer;

window.addEventListener("load", setSize);
window.addEventListener("load", onLoad);

// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(function() {
//     setSize();
//     setSize();
//   }, 1000);
// });
