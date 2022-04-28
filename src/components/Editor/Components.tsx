import library from "library";
import QuickControl from "components/QuickControl";
import { observer } from "mobx-react";
import { memo } from "react";
import ElementMaker from "./ElementMaker";

const Components = observer(() => {
  return (
    <>
      {library.map((elem, index) => (
        // <ComponentWrapper>
        <ElementMaker elem={elem} key={index} />
        // </ComponentWrapper>
      ))}
    </>
  );
});

export default memo(Components);
