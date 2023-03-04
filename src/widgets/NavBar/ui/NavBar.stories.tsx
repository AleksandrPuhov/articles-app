import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from './NavBar';

export default {
  title: 'widgets/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavBarNormal = Template.bind({});

export const NavBarDark = Template.bind({});
NavBarDark.decorators = [ThemeDecorator(Theme.DARK)];
