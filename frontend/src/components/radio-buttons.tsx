import { memo, useEffect, useState } from "react";

export const RadioButtons = memo(
  ({
    values,
    onClick,
    selected,
    required = true,
  }: {
    values: string[];
    onClick: (value: string) => void;
    selected?: number;
    required?: boolean;
  }) => {
    const [checked, setChecked] = useState(selected || 0);
    useEffect(() => {
      setChecked(selected || 0);
    }, [selected]);
    const onButtonClick = (index: number) => {
      if (!required && index === checked) {
        setChecked(-1);
      } else {
        setChecked(index);
      }
      onClick(values[index]);
    };
    return (
      <div className="flex flex-col">
        {values.map((value, index) => (
          <div key={value + index} className="flex flex-row">
            <input
              className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              value={index}
              onClick={() => onButtonClick(index)}
              onChange={() => console.log("change")}
              checked={checked === index}
            />
            <label
              className="inline-block text-gray-800 hover:cursor-pointer"
              onClick={() => onButtonClick(index)}
            >
              {value}
            </label>
          </div>
        ))}
      </div>
    );
  }
);
