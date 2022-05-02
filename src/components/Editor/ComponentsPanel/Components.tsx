import { observer } from "mobx-react";
import { memo } from "react";
import { element } from "../types";
import ElementMaker from "./ElementMaker";

const Components = observer(({ components }: { components: Array<element> }) => {
  return (
    <>
      {components.map((elem, index) => (
        <ElementMaker elem={elem} key={index} />
      ))}
    </>
  );
});

export default memo(Components);
