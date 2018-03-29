import { configure } from '@storybook/react';

function loadStories() {
  //require('../stories/index.js');
  alert('123')
  // You can require as many stories as you need.
}

configure(loadStories, module);


//    "@storybook/addon-knobs": "^4.0.0-alpha.0",
//    "@storybook/addon-actions": "^4.0.0-alpha.0",
//    "@storybook/addon-links": "^4.0.0-alpha.0",
//    "@storybook/addons": "^4.0.0-alpha.0"
