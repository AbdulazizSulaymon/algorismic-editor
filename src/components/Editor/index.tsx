import Title from "components/Title";
import EditorWrapper from "./EditorWrapper";
import Controls from "./Controls";
import ContentMaker from "./ContentMaker";
import { element, scheme } from "./types";
import { observer } from "mobx-react";
import { memo, useContext, useEffect } from "react";
import StoreContext from "store/StoreContext";
import { iteratorChildren } from "./iteratorChildren";
import Components from "./Components";
import { divide } from "lodash";

const Editor = observer(({ content }: { content: scheme }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    content.page.children = [{ tag: "div", attributes: {}, children: content.page.children }];
    store.scheme = content;

    iteratorChildren(store.scheme.page.children, (elem: element) => {
      if (!elem.attributes) elem.attributes = {};
      elem.attributes.id = `id${store.lastId++}`;
    });

    let arr: element[] = [];
    iteratorChildren(content.page.children, (elem: element) => {
      arr.push(elem);
    });
    // console.log(arr);
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
          <Title>Content</Title>
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
