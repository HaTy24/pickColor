const pickr = Pickr.create({
  el: ".color-picker",
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: false,
      input: true,
      clear: true,
      save: true,
    },
  },
});

const color = document.querySelectorAll(".color-item li");
const radio = document.querySelectorAll(".radio");
const code = document.querySelectorAll(".btn-color");
const show = document.querySelectorAll(".show-color");
const changeSBC = document.querySelectorAll(".changeSBC");
const changeSC = document.querySelectorAll(".changeSC");
const changePC = document.querySelectorAll(".changePC");
const text = document.querySelectorAll(".show-color p");
const span = document.querySelector(".text");

const btn = document.querySelector(".pcr-button");

color.forEach((item) => item.addEventListener("click", changeColor));

function changeColor(e) {
  // ============color-click=================
  function colorClick() {
    if (e.target.matches(".color-item li")) {
      for (c of color) {
        c.classList.remove("colorClick");
      }
      e.target.classList.toggle("colorClick");
    }
  }
  // =============Checked==============
  if (radio[0].checked === true) {
    for (let i = 0; i <= color.length; i++) {
      if (e.target === color[i]) {
        let h = window
          .getComputedStyle(color[i])
          .getPropertyValue("background-color");
        for (let j = 0; j < show.length; j++) {
          show[j].style.backgroundColor = h;
          code[0].innerHTML = h;
          code[0].style.backgroundColor = h;
        }
        for (let k = 0; k < changePC.length; k++) {
          changePC[k].style.color = h;
        }
        colorClick();
      }
    }
  } else if (radio[1].checked === true) {
    for (let i = 0; i <= color.length; i++) {
      if (e.target === color[i]) {
        let h = window
          .getComputedStyle(color[i])
          .getPropertyValue("background-color");
        for (let j = 0; j < changeSBC.length; j++) {
          changeSBC[j].style.backgroundColor = h;
          code[1].innerHTML = h;
          code[1].style.backgroundColor = h;
        }
        for (let k = 0; k < changeSC.length; k++) {
          changeSC[k].style.color = h;
        }
        colorClick();
      }
    }
  } else if (radio[2].checked === true) {
    for (let i = 0; i <= color.length; i++) {
      if (e.target === color[i]) {
        let h = window
          .getComputedStyle(color[i])
          .getPropertyValue("background-color");
        span.style.backgroundColor = h;
        for (let j = 0; j < text.length; j++) {
          text[j].style.color = h;
          code[2].innerHTML = h;
          code[2].style.backgroundColor = h;
        }
      }
      colorClick();
    }
  }
}

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }
// function rgbToHex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
// alert(rgbToHex(0, 51, 255));

btn.addEventListener("click", function () {
  pickr.on("change", () => {
    const picker = pickr._color.toHEXA();
    if (radio[0].checked === true) {
      for (let i = 0; i < show.length; i++) {
        show[i].style.backgroundColor = picker;
        code[0].innerHTML = picker;
        code[0].style.backgroundColor = picker;
      }
      for (let k = 0; k < changePC.length; k++) {
        changePC[k].style.color = picker;
      }
    }
    if (radio[1].checked === true) {
      for (let i = 0; i < changeSBC.length; i++) {
        changeSBC[i].style.backgroundColor = picker;
        code[1].innerHTML = picker;
        code[1].style.backgroundColor = picker;
      }
      for (let k = 0; k < changeSC.length; k++) {
        changeSC[k].style.color = picker;
      }
    }
    if (radio[2].checked === true) {
      for (let i = 0; i < text.length; i++) {
        text[i].style.color = picker;
        code[2].innerHTML = picker;
        code[2].style.backgroundColor = picker;
      }
      span.style.backgroundColor = picker;
    }
  });
});
