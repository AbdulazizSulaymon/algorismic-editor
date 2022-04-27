import Title from "components/Title";
import EditorWrapper from "./EditorWrapper";
import library from "library";
import ComponentWrapper from "components/ComponentWrapper";
import CollapseGroup from "components/CollapseGroup";
import Input from "components/Input";
import Controls from "./Controls";

import ContentMaker from "./ContentMaker";
import { scheme } from "./types";
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import StoreContext from "store/StoreContext";

const Components = () => {
  return (
    <>
      {library.map((Item) => (
        // <ComponentWrapper>
        <Item style={{}}>123</Item>
        // </ComponentWrapper>
      ))}
    </>
  );
};

const style = {
  padding: 20,
  margin: 20,
  color: "red",
};

const Editor = observer(({ content }: { content: scheme }) => {
  const store = useContext(StoreContext);
  console.log(store.scheme.page);

  useEffect(() => {
    store.scheme.page = content.page;
  }, []);

  return (
    <EditorWrapper>
      <header>
        <img src="/icon.png" className="logo" alt="Algorismic Editor" />
        <p className="title">Algorismic Editor</p>
      </header>
      <section className="panel">
        <section className="components">
          <Title>Components</Title>
          <Components />
        </section>
        <main>
          <Title>Main</Title>
          {library.map((Item) => (
            <ComponentWrapper>
              <Item style={style}>123</Item>
            </ComponentWrapper>
          ))}
          <hr />
          <ContentMaker scheme={store.scheme} />
        </main>
        <aside>
          <Title>Controls</Title>
          <Controls />
        </aside>
      </section>
      <footer></footer>
    </EditorWrapper>
  );
});

export default Editor;
