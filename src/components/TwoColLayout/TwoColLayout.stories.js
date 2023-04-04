import React from 'react';
import TwoColumnLayout from './TwoColLayout';

export default {
  title: 'TwoColumnLayout',
  component: TwoColumnLayout,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <TwoColumnLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Title',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed purus eget mauris consequat faucibus. Sed maximus euismod odio ac volutpat.',
  buttonText: 'Click Me',
  imageSrc: 'https://picsum.photos/300',
};
export const ImageLeft = Template.bind({});
ImageLeft.args = {
  ...Default.args,
  imagePosition: "left",
};