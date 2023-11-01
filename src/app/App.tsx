import { FC } from "react";

import "./styles/index.scss";

import "@shared/config/i18n/i18n";

import { ErrorBoundary } from "@app/providers/ErrorBoundary";
import { ThemeProvider } from "@app/providers/ThemeProvider";
import AppRouter from "./router/AppRouter";

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
