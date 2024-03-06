import {
  CertificateDataConfigType,
  ValueType,
} from "../../types/certificateElement.types";

export function UeUnknown({
  config,
  value,
}: {
  config: CertificateDataConfigType;
  value: ValueType | null;
}) {
  return (
    <div className="p-1">
      <div className="bg-slate-800 text-red-400 p-2">
        <span className="font-bold">UNKNOWN:</span> {config.type} /{" "}
        {value?.type}
      </div>
    </div>
  );
}
