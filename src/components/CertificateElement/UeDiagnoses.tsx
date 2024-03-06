import {
  ConfigUeDiagnoses,
  ValueDiagnosisList,
} from "../../types/certificateElement.types";

export function UeDiagnoses({
  config,
  value,
}: {
  config: ConfigUeDiagnoses;
  value: ValueDiagnosisList;
}) {
  return (
    <div className="flex flex-col divide-y">
      {config.list.map((item, index) => {
        const val = value.list.find(({ id }) => id === item.id);
        return (
          <div key={item.id} className="border-black flex items-end">
            <div className="w-full p-1">{val?.description}</div>
            <div className="w-80 border-l border-black">
              {index === 0 && (
                <div className="text-nowrap px-1 text-sm">
                  Diagnoskod enligt ICD-10 SE
                </div>
              )}

              <div className="flex items-end h-8 divide-x">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-2.5 px-2 border-black relative"
                  >
                    <span className="absolute bottom-0 right-0 left-0 text-center">
                      {val?.code.at(i) ?? "\u00A0"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
