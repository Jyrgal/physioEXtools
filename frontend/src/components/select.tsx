import { CheckCircleIcon } from "@heroicons/react/outline";
import { memo, useState } from "react";

export const Select = memo(
  ({
    value,
    styles,
    startSelected = false,
    onClick,
  }: {
    value: string;
    styles?: string;
    startSelected?: boolean;
    onClick: () => void;
  }) => {
    const [selected, setSelected] = useState(startSelected);
    return (
      <div
        onClick={() => {
          setSelected(!selected);
          onClick();
        }}
        className={`flex flex-row select-none cursor-pointer justify-between border p-4 rounded-lg m-2 ${
          selected ? "border-blue-600" : "border-gray-200 "
        }`}
      >
        <div className={styles}>{value}</div>
        <CheckCircleIcon
          className={`h-8 ${selected ? "text-blue-600" : "text-gray-300"}`}
        />
      </div>
    );
  }
);
