import { ReactNode } from "react";
import { CheckboxIcon } from "./Icon/CheckboxIcon";
import { CheckboxIconFilled } from "./Icon/CheckboxIconFilled";

export function Checkbox({
  selected,
  children,
}: {
  selected?: boolean | null;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-none">
        {selected ? <CheckboxIconFilled /> : <CheckboxIcon />}
      </div>
      {children}
    </div>
  );
}
