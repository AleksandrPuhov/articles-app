import { FC } from "react";

import "@shared/config/i18n/i18n";

import { ErrorBoundary } from "@app/providers/ErrorBoundary";
import { ThemeProvider } from "@app/providers/ThemeProvider";
import { AppRouter } from "./router";
import { StoreProvider } from "./providers/StoreProvider";

const App: FC = () => {
  return (
    <>
      <ErrorBoundary>
        <StoreProvider>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </StoreProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
