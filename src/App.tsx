import { ThemeProvider } from "@emotion/react";
import theme from "style/theme";
import Editor from "components/Editor";
import { Global } from "@emotion/react";
import globalStyles from "style/globalStyles";
import StoreContext from "store/StoreContext";
import Store from "store/Store";
import content from "contentScheme/content.json";

function App() {
  return (
    <StoreContext.Provider value={new Store()}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Editor content={content} />
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

export default App;
