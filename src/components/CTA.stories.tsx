import React from "react";
import { Story, Meta } from "@storybook/react";

import { CTA } from "./CTA";

export default {
  title: "CTA",
  component: CTA,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <CTA {...args} />;

export const Primary = Template.bind({});
