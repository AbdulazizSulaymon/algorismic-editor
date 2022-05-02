import Title from "components/Title";
import EditorWrapper from "./EditorWrapper";
import Controls from "./Controls";
import ContentMaker from "./ContentMaker";
import { element, scheme } from "./types";
import { observer } from "mobx-react";
import { memo, useContext, useEffect, useState } from "react";
import StoreContext from "store/StoreContext";
import { iteratorChildren } from "./iteratorChildren";
import ComponentsContainer from "./ComponentsPanel/Components";
import Tab from "components/Tab";
import Layers from "./Layers";
import Button from "components/Button";
import Download from "./Download";
import { fullscreen, hasFullscreen } from "./fullscreen";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import Elements from "library/Elements";
import Components from "library/Components";

const Editor = observer(({ content }: { content: scheme }) => {
  const store = useContext(StoreContext);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    store.lastId = 1;

    content.page.children = [{ tag: "div", attributes: {}, children: content.page.children }];
    store.scheme = content;

    iteratorChildren(store.scheme.page.children, (elem: element) => {
      if (!elem.attributes) elem.attributes = {};
      const id = `id${store.lastId++}`;
      elem.attributes.id = id;
    });
  }, []);

  return (
    <EditorWrapper>
      <header>
        <div className="left">
          <img src="/icon.png" className="logo" alt="Algorismic Editor" />
          <p className="title">Algorismic Editor</p>
        </div>
        <Button onClick={() => setIsFullScreen(fullscreen())} className="btnFullScreen">
          {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </Button>
      </header>
      <section className="panel">
        <section className="components">
          <Tab tabs={["Elements", "Components"]}>
            <>
              <Title>Elements</Title>
              <ComponentsContainer components={Elements} />
            </>
            <>
              <Title>Components</Title>
              <ComponentsContainer components={Components} />
            </>
          </Tab>
        </section>
        <main>
          <Title>Content</Title>
          <ContentMaker />
        </main>
        <aside>
          <Tab tabs={["Controls", "Layers"]}>
            <>
              <Title>Controls</Title>
              <Controls />
            </>
            <>
              <Title>Layers</Title>
              <Layers />
            </>
          </Tab>
          <Download />
        </aside>
      </section>
      <footer></footer>
    </EditorWrapper>
  );
});

export default memo(Editor);
