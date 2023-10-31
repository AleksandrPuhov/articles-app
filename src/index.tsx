import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@app/providers/ThemeProvider';
import App from '@app/App';

import '@shared/config/i18n/i18n';
// import { ErrorBoundary } from '@app/providers/ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ErrorBoundary> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </ErrorBoundary> */}
  </StrictMode>
);
