import { ThemeProvider } from "@emotion/react";
import theme from "style/theme";
import Editor from "components/Editor";
import { createContext, useState } from "react";
import { Global, css } from "@emotion/react";
import globalStyles from "style/globalStyles";
import MobxPage from "components/MobxPage";
import StoreContext from "store/StoreContext";
import Store from "store/Store";
import content from "contentScheme/content.json";

export const DarkModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});
function App() {
  // const [mode, setMode] = useState<PaletteMode>("light");
  // const theme = makeTheme(mode);
  return (
    <StoreContext.Provider value={new Store()}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Editor content={content} />
        {/* <MobxPage /> */}
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

export default App;
