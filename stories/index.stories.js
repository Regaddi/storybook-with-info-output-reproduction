import { Button, Welcome } from "@storybook/react/demo";

import React from "react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addWithJSX("with info", () => <Button type="submit">Hello Button</Button>, {
    info: {
      text: `
        ### Button

        Some explanationary text
        `
    }
  })
  .addWithJSX("without info", () => (
    <Button type="submit">Hello Button</Button>
  ));
