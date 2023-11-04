import { FC } from "react";

import "@shared/config/i18n/i18n";

import { ErrorBoundary } from "@app/providers/ErrorBoundary";
import { ThemeProvider } from "@app/providers/ThemeProvider";
import { AppRouter } from "./router";

const App: FC = () => {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
