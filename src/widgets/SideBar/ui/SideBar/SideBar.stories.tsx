import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SideBar from './SideBar';

export default {
  title: 'widgets/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const SideBarNormal = Template.bind({});

export const SideBarDark = Template.bind({});
SideBarDark.decorators = [ThemeDecorator(Theme.DARK)];
