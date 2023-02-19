import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "@library/core";

export default {
  title: "Example/Link",
  component: Link,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "link to website",
  type: "primary",
  to: "/",
  underlined: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "link to website",
  type: "secondary",
  to: "/",
  underlined: true,
};
