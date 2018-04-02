import { cwd } from 'process';
import { join as pathJoin } from 'path';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';


// addon-options
//setOptions({
//  name: '?',
//  url: '?',
//  sortStoriesByKind: true,
//});

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true,
});

// load stories
let loadStories = () => {
  /*
  const storiesContext = require.context(
    pathJoin(cwd(), 'src'),
    true,
    /\.(story|stories)\.(js|coffee)$/,
  );
  storiesContext.keys().forEach(storiesContext);
  */
  require('/Users/vsych/dev/zeropack/packages/zeropack-test-app-preset-coffee/src/hello.story.coffee')
}

configure(loadStories, module);
