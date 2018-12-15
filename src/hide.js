import sketch from "sketch";
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  const document = require('sketch/dom').getSelectedDocument()
  const numbers = document.getLayersNamed('Number');
  const arrows = document.getLayersNamed('Arrow');
  const layers = numbers.concat(arrows);

  layers.forEach(layer => {
    layer.style.opacity = 0;
  });

  sketch.UI.message(`${layers.length} layers hidden`);
}
