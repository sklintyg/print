import {
  ConfigUeCheckboxBoolean,
  ValueBoolean,
} from "../../types/certificateElement.types";
import { Checkbox } from "../Checkbox";

export function UeCheckbox({
  config,
  value,
}: {
  config: ConfigUeCheckboxBoolean;
  value: ValueBoolean;
}) {
  return (
    <div className="p-4">
      <Checkbox selected={value.selected}>{config.label}</Checkbox>
    </div>
  );
}
