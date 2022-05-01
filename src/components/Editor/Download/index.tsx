import Button from "components/Button";
import { observer } from "mobx-react";
import { useCallback, useContext } from "react";
import StoreContext from "store/StoreContext";
import { DownloadText, postText, preText } from "./utils";

export default observer(function Download() {
  const store = useContext(StoreContext);

  const download = useCallback(() => {
    const id = store.selectedElement.attributes.id;
    const domNode = document.getElementById(id);
    const outer = domNode?.outerHTML;

    if (outer) DownloadText(`${preText}${outer}${postText}`, "page.html");
  }, [store.selectedElement]);

  return (
    <>
      <Button onClick={download} style={{ marginTop: 20 }}>
        Download HTML
      </Button>
    </>
  );
});
