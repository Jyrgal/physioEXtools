import { memo, useState } from "react";

export const RadioButtons = memo(
  ({
    values,
    onClick,
  }: {
    values: string[];
    onClick: (value: string) => void;
  }) => {
    const [checked, setChecked] = useState(0);
    return (
      <div className="flex flex-col">
        {values.map((value, index) => (
          <div className="form-check flex flex-row">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              value={index}
              onChange={() => {
                setChecked(index);
                onClick(values[index]);
              }}
              checked={checked === index}
            />
            <label
              className="form-check-label inline-block text-gray-800 hover:cursor-pointer"
              onClick={() => {
                setChecked(index);
                onClick(values[index]);
              }}
            >
              {value}
            </label>
          </div>
        ))}
      </div>
    );
  }
);
