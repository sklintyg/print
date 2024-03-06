import {
  ConfigUeTextArea,
  ValueText,
} from "../../types/certificateElement.types";

export function UeTextArea({
  config,
  value,
}: {
  config: ConfigUeTextArea;
  value: ValueText;
}) {
  if (!value.text) {
    return null;
  }
  return (
    <div className="p-1">
      <div className="text-sm">{config.text}</div>
      {value.text ?? "\u00A0"}
    </div>
  );
}
