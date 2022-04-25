import Title from "../Title";
import EditorWrapper from "./EditorWrapper";
import library from "../../library";
import ComponentWrapper from "../ComponentWrapper";

console.log(library);

const Components = () => {
  return (
    <>
      {library.map((Item) => (
        <ComponentWrapper>
          <Item>123</Item>
        </ComponentWrapper>
      ))}
    </>
  );
};

export default function Editor() {
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
              <Item>123</Item>
            </ComponentWrapper>
          ))}
        </main>
        <aside>
          <Title>Controls</Title>
          <p>123</p>
        </aside>
      </section>
      <footer></footer>
    </EditorWrapper>
  );
}
