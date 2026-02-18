// Resume
document.getElementById("resumeLink").href =
  "asset/Rohit Ratate Frontend Developer Resume.pdf";

// Scroll to Top
function scrollToTop(val) {
  targetClass = val.dataset.scroll;
  const elements = document.getElementsByClassName(targetClass);

  if (elements.length > 0) {
    elements[0].scrollIntoView({ behavior: "smooth" });
  }
}

// js Canvas animation

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    if (
      !TagCanvas.Start("myCanvas", "tagList", {
        textColour: "#000000",
        font: "Montserrat, sans-serif",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        initial: [0.1, -0.1],
        wheelZoom: false,
        freezeActive: true,
        shuffleTags: true,
        noSelect: true,
        clickToFront: 500,
      })
    ) {
      // TagCanvas failed to load
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }, 1000);
});
