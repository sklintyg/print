import { ConfigCategory } from "../../types/certificateElement.types";

export function UeCategory({
  index,
  title,
}: {
  config: ConfigCategory;
  index: number;
  title: string;
}) {
  return (
    <h2 className="text-lg font-bold">
      {index + 1}. {title}
    </h2>
  );
}
