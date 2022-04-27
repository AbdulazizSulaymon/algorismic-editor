import CollapseGroup from "../CollapseGroup";
import Input from "../Input";

export default function Controls() {
  return (
    <>
      <CollapseGroup title={"Dimensions"}>
        <CollapseGroup title={"Width and Height"}>
          <div className="d-flex">
            <Input value={0} label="Width" name="width" type="number" />
            <Input value={0} label="Height" name="height" type="number" />
          </div>
        </CollapseGroup>
        <CollapseGroup title={"Padding"}>
          <div className="d-flex">
            <Input value={0} label="Top" name="pt" type="number" />
            <Input value={0} label="Right" name="pr" type="number" />
          </div>
          <div className="d-flex">
            <Input value={0} label="Bottom" name="pb" type="number" />
            <Input value={0} label="Left" name="pl" type="number" />
          </div>
        </CollapseGroup>
        <CollapseGroup title={"Margin"}>
          <div className="d-flex">
            <Input value={0} label="Top" name="mt" type="number" />
            <Input value={0} label="Right" name="mr" type="number" />
          </div>
          <div className="d-flex">
            <Input value={0} label="Bottom" name="mb" type="number" />
            <Input value={0} label="Left" name="ml" type="number" />
          </div>
        </CollapseGroup>
        <CollapseGroup title={"Typography"}>
          <Input value={""} label="Color" name="color" type="color" />
          {/* <div className="d-flex">
            <Input value={0} label="Bottom" name="mb" type="number" />
            <Input value={0} label="Left" name="ml" type="number" />
          </div> */}
        </CollapseGroup>
      </CollapseGroup>
    </>
  );
}
