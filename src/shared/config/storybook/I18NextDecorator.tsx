import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18nForStorybook from '@shared/config/i18n/i18nForStorybook';
import { Suspense } from 'react';

export const I18NextDecorator = (StoryComponent: Story) => (
  <Suspense fallback="">
    <I18nextProvider i18n={i18nForStorybook}>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
);
