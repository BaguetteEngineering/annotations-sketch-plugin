import sketch from "sketch";
// Documentation: https://developer.sketchapp.com/reference/api/

// Hide/show all 'Annotations' layers
export default function(shouldShow) {
  const document = require("sketch/dom").getSelectedDocument();
  const layers = document.getLayersNamed("Annotations");

  // Display message when no 'Annotations' layer can be found
  if (layers.length === 0) {
    const verb = shouldShow ? "show" : "hide";
    sketch.UI.message(
      `Could not find any 'Annotations' layer group to ${verb}.`
    );
    return;
  }

  // Hide/show layers
  layers.forEach(layer => {
    layer.hidden = !shouldShow;
  });

  // Display confirmation message
  if (shouldShow) {
    sketch.UI.message(`🐵 ${layers.length} layers shown. `);
  } else {
    sketch.UI.message(`🙈 ${layers.length} layers hidden. `);
  }
}
