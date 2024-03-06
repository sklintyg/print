import { ConfigUeIcf, ValueIcf } from "../../types/certificateElement.types";

export function UeIcf({
  config,
  value,
}: {
  config: ConfigUeIcf;
  value: ValueIcf;
}) {
  return (
    <div className="p-1">
      <div className="text-sm">{config.text}</div>
      {value.text ?? "\u00A0"}
    </div>
  );
}
