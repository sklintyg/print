import {
  ConfigUeCheckboxMultipleCodes,
  ValueCodeList,
} from "../../types/certificateElement.types";
import { Checkbox } from "../Checkbox";

export function UeCheckboxMultipleCode({
  config,
  value,
}: {
  config: ConfigUeCheckboxMultipleCodes;
  value: ValueCodeList;
}) {
  return (
    <div className="p-4 grid grid-rows-4 grid-flow-col gap-2">
      {config.list.map((item) => (
        <Checkbox
          key={item.id}
          selected={Boolean(value.list.find(({ id }) => item.id === id))}
        >
          {item.label}
        </Checkbox>
      ))}
    </div>
  );
}
