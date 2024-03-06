import {
  ConfigUeRadioBoolean,
  ValueBoolean,
} from "../../types/certificateElement.types";
import { Checkbox } from "../Checkbox";

export function UeRadio({
  config,
  value,
}: {
  config: ConfigUeRadioBoolean;
  value: ValueBoolean;
}) {
  return (
    <div className="p-1">
      <div className="text-sm">{config.text}</div>
      <div className="flex gap-2 p-3">
        <Checkbox selected={value.selected}>{config.selectedText}</Checkbox>
        <Checkbox selected={!value.selected}>{config.unselectedText}</Checkbox>
      </div>
    </div>
  );
}
