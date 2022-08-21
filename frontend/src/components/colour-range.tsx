import { CheckCircleIcon } from "@heroicons/react/outline";
import { memo, useEffect, useState } from "react";

export const ColourRange = memo(
  ({
    onChange,
    initialValue,
    values,
  }: {
    onChange?: (value: number) => void;
    initialValue?: number;
    values?: string[];
  }) => {
    const length = values?.length || 0;
    const labels = Array.from({ length }, (_, i) => i);
    const [selected, setSelected] = useState(initialValue);
    let heightDiv = "";
    switch (length) {
      case 1:
        heightDiv = "h-64";
        break;
      case 2:
        heightDiv = "h-68";
        break;
      case 3:
        heightDiv = "h-72";
        break;
      case 4:
        heightDiv = "h-80";
        break;
      default:
        heightDiv = "h-screen";
    }
    useEffect(() => {
      setSelected(initialValue);
    }, [initialValue, setSelected]);

    return (
      <div className={`flex flex-row w-full ${heightDiv}`}>
        <div className="flex w-5 mt-3 items-center bg-gradient-to-b from-green-400 to-blue-500" />
        <div className="flex flex-row px-2 mt-2">
          <ul className="flex flex-col justify-between h-full ml-4">
            {labels.map((label, index) => (
              <li key={label + index} className="flex justify-center relative ">
                <span>{length - label - 1}.</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col justify-between h-full w-full ml-6">
            {values?.map((value, index) => (
              <li
                key={value + index}
                className="flex justify-between relative hover:bg-gray-100 hover:cursor-pointer w-full"
                onClick={() => {
                  setSelected(index);
                  onChange && onChange(index);
                }}
              >
                <span>{value}</span>
                <CheckCircleIcon
                  className={`h-6 ${
                    selected === index ? "text-blue-600" : "text-gray-300"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);
