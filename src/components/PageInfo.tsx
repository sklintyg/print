import { ReactNode } from "react";

export function PageInfo({
  position,
  children,
}: {
  position: "left" | "right";
  children: ReactNode;
}) {
  return (
    <div className={`fixed top-0 bottom-0 ${position}-0 leading-4 text-sm`}>
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "sideways",
          height: "100%",
        }}
        className="rotate-180"
      >
        {children}
      </div>
    </div>
  );
}
