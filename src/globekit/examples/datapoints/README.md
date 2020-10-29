# Datapoints Globe

## Features this file shows how to use:
- Pointglobe
- Loading a Geometry Binary
- High Volume Data Viz (10,000+)
- Interactivity
- Loading data from a json file

## Instructions

#### Step 1: Setup a GlobeKitView

globe.js:
```
import {GlobeKitView, PointGlobe, Points} from 'path/to/globekit.esm.js';

const apiKey = '{YOUR_API_KEY}';

const canvas = document.getElementById('globekit-canvas');

const gkOptions = {
  apiKey,
  wasmPath: '{path/to/gkweb_bg.wasm}',
  attributes: {
    alpha: false,
  },
};

const gkview = new GlobeKitView(canvas, gkOptions);
```

#### Step 2: Setup the PointGlobe

globe.js:
```
const textures = {
  noise: '{path/to/clouds.png}',
};

fetch('{path/to/pointglobe.bin}')
  .then((res) => res.arrayBuffer())
  .then((data) => {

    // Set the color 
    const pointglobeParams = {
      color: '#F300A6',
    };

    // 
    const pointglobe = new PointGlobe(textures, data, pointglobeParams);

    pointglobe.setInteractive(true, true, false);
  })
  .then(() => {
    
    // Add drawable to gkview and register a callback to be executed 
    gkview.addDrawable(pointglobe, () => {
      // Start Rendering
      gkview.startDrawing();
    });
  });
```

#### Step 3: Setup data points drawable
