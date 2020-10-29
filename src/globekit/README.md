# GlobeKit.js

### Files:
`globekit.ems.js` - GlobeKit module, **used in nearly all applications** so most likely you need to copy this file.

`globekit.cjs.js` - GlobeKit common js

`globekit.umd.js` - GlobeKit UMD.

`gkweb_bg.wasm` - needs to be served as a static resource

`./assets` - has the files for pointglobe and lowpoly globes.


### Getting Started

1) Copy `globekit.esm.js` into your source directory
2) Copy `gkweb_bg.wasm`  into your static resources
3) Get your API Key from your GlobeKit Account Page

### Hello World
```
import { GlobeKitView, Icosphere } from "{path/to/globekit.esm.js}";

const apiKey = {your api key};
const options = {
  apiKey: apiKey,
  wasmPath: {path/to/gkweb_bg.wasm},
};

this.onInitCB = () => {};

this.gkview = new GlobeKitView(canvas, options, this.onInitCB);

this.icosphere = new Icosphere('{path/to/image/}');
this.gkview.addDrawable(this.icosphere, () => {
  this.gkview.startDrawing();
});
```

### see docs.globekit.co for more tutorials
