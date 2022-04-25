import { jsx, ThemeProvider } from "@emotion/react";
import theme from "./style/theme";
import Editor from "./components/Editor";
import { createContext, useState } from "react";
import { Global, css } from "@emotion/react";
import globalStyles from "./style/globalStyles";

export const DarkModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});

function App() {
  // const [mode, setMode] = useState<PaletteMode>("light");
  // const theme = makeTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Editor />
    </ThemeProvider>
  );
}

export default App;
