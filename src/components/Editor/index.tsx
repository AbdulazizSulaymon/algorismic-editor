import Title from "components/Title";
import EditorWrapper from "./EditorWrapper";
import library from "library";
import ComponentWrapper from "components/ComponentWrapper";
import CollapseGroup from "components/CollapseGroup";
import Input from "components/Input";
import Controls from "./Controls";
import ContentMaker from "./ContentMaker";
import { children, element, scheme } from "./types";
import { observer } from "mobx-react";
import { memo, useContext, useEffect } from "react";
import StoreContext from "store/StoreContext";
import { iteratorChildren } from "./iteratorChildren";

const Components = () => {
  return (
    <>
      {library.map((Item, index) => (
        // <ComponentWrapper>
        <Item style={{}} key={index}>
          123
        </Item>
        // </ComponentWrapper>
      ))}
    </>
  );
};

const Editor = observer(({ content }: { content: scheme }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.scheme = content;

    let count = 1;
    iteratorChildren(store.scheme.page.children, (elem: element) => {
      if (!elem.attributes) elem.attributes = {};
      elem.attributes.id = `id${count++}`;
    });

    let arr: element[] = [];
    iteratorChildren(content.page.children, (elem: element) => {
      arr.push(elem);
    });
    console.log(arr);
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
          <ContentMaker />
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

export default memo(Editor);
