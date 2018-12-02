// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import {ReactInstance} from 'react-360-web';
import KeyboardModule from 'react-360-keyboard/KeyboardModule';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [KeyboardModule.addModule],
    //cursorVisibility: "visible",
    ...options,
  });
  
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('yhack_2018', { /* initial props */ }),
    r360.getDefaultSurface()
  );
  KeyboardModule.setInstance(r360);
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
