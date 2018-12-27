const sketch = require("sketch/dom");
const ui = require("sketch/ui");

// Create a group named 'Annotations' from the selected layers
export default function() {
  const document = sketch.getSelectedDocument();
  const layers = document.selectedLayers.layers;

  // Display message when no layer is selected
  if (layers.length === 0) {
    ui.message(`No layers selected.`);
    return;
  }

  // Find to which parent the group should be attached
  let parent = layers[0].parent;
  if (!parent) {
    parent = sketch.Page.fromNative(layers[0].sketchObject.parentPage());
  }

  // Create the group
  const group = new sketch.Group({
    parent: parent,
    name: "Annotations",
    layers: layers
  });
  group.adjustToFit();

  ui.message(`New 'Annotations' group created from ${layers.length} layers.`);
}
