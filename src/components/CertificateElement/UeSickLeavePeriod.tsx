import { Fragment } from "react/jsx-runtime";
import {
  ConfigUeSickLeavePeriod,
  ValueDateRangeList,
} from "../../types/certificateElement.types";
import { Checkbox } from "../Checkbox";

export function UeSickLeavePeriod({
  config,
  value,
}: {
  config: ConfigUeSickLeavePeriod;
  value: ValueDateRangeList;
}) {
  return (
    <div className="px-4 pb-4 grid grid-cols-3 gap-2">
      <div className="text-sm col-start-2 border-l border-black px-2">
        från och med (år, månad, dag)
      </div>
      <div className="text-sm border-l border-black px-2">
        till och med (år, månad, dag)
      </div>
      {config.list.map((item) => {
        const val = value.list.find(({ id }) => item.id === id);
        return (
          <Fragment key={item.id}>
            <Checkbox selected={Boolean(val)}>{item.label}</Checkbox>
            <div className="px-2">{val?.from}</div>
            <div className="px-2">{val?.to}</div>
          </Fragment>
        );
      })}
    </div>
  );
}
