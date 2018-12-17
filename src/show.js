import sketch from "sketch";
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  const document = require('sketch/dom').getSelectedDocument()
  const layers = document.getLayersNamed('Annotations');

  layers.forEach(layer => {
    layer.style.opacity = 1;
    layer.locked = false;
  });

  sketch.UI.message(`${layers.length} layers shown 🐵`);
}