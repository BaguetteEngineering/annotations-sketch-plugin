const sketch = require("sketch/dom");
const ui = require("sketch/ui");

// Hide/show all 'Annotations' layers
export default function(shouldHide) {
  const document = sketch.getSelectedDocument();
  const layers = document.getLayersNamed("Annotations");

  // Display message when no 'Annotations' layer can be found
  if (layers.length === 0) {
    const verb = shouldHide ? "hide" : "show";
    ui.message(`Could not find any 'Annotations' layer group to ${verb}.`);
    return;
  }

  // Hide/show layers
  layers.forEach(layer => {
    layer.hidden = shouldHide;
  });

  // Display confirmation message
  if (shouldHide) {
    ui.message(`🙈 ${layers.length} layers hidden. `);
  } else {
    ui.message(`🐵 ${layers.length} layers shown. `);
  }
}
