import { addDecorator, configure, setAddon } from "@storybook/react";

import JSXAddon from "storybook-addon-jsx";
import { withInfo } from "@storybook/addon-info";

setAddon(JSXAddon);

configure(loadStories, module);

addDecorator(
  withInfo({
    header: false // Global configuration for the info addon across all of your stories.
  })
);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
