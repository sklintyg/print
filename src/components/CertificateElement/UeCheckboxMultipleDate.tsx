import { Fragment } from "react/jsx-runtime";
import {
  ConfigUeCheckboxMultipleDate,
  ValueDateList,
} from "../../types/certificateElement.types";
import { Checkbox } from "../Checkbox";

export function UeCheckboxMultipleDate({
  config,
  value,
}: {
  config: ConfigUeCheckboxMultipleDate;
  value: ValueDateList;
}) {
  return (
    <div className="px-4 pb-4 grid grid-cols-2 gap-2">
      <div className="text-sm col-start-2 border-l border-black px-2">
        datum (år, månad, dag)
      </div>
      {config.list.map(({ id, label }) => {
        const val = value.list.find((val) => val.id === id);
        return (
          <Fragment key={id}>
            <Checkbox
              selected={Boolean(value.list.find(({ id }) => id === id))}
            >
              {label}
            </Checkbox>
            <div className="px-2">{val?.date}</div>
          </Fragment>
        );
      })}
    </div>
  );
}
