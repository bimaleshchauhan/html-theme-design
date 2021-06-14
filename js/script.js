// // slider 1
// var slider = document.getElementById("slider1");
// var output = document.getElementById("slider1_value");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
// // slider2
// var slider2 = document.getElementById("slider2");
// var output2 = document.getElementById("slider2_value");
// output2.innerHTML = slider2.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider2.oninput = function() {
//   output2.innerHTML = this.value;
// }

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}