import "./styles/index.scss";

import { useThemes } from "./providers/ThemeProvider";
import { classNames } from "@shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "@widgets/NavBar";

const App = () => {
  const { theme } = useThemes();

  return (
    <div className={classNames(["app", theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
