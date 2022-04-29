import library from "library";
import { observer } from "mobx-react";
import { memo } from "react";
import ElementMaker from "./ElementMaker";

const Components = observer(() => {
  return (
    <>
      {library.map((elem, index) => (
        <ElementMaker elem={elem} key={index} />
      ))}
    </>
  );
});

export default memo(Components);
