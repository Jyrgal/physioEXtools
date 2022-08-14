import { memo, useEffect, useState } from "react";

export const Range = memo(
  ({
    min,
    max,
    step,
    onChange,
    initialValue,
  }: {
    min: number;
    max: number;
    step: number;
    onChange?: (value: number) => void;
    initialValue?: number;
  }) => {
    const length = (max - min) / step + 1;
    const labels = Array.from({ length }, (_, i) => min + i * step);
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue, setValue]);

    return (
      <div>
        <input
          type="range"
          className="w-full outline-none focus:outline-none focus:ring-0 focus:shadow-none"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            // console.log(e.target.value);
            // onChange(parseInt(e.target.value));
            setValue(parseInt(e.target.value));
            onChange && onChange(parseInt(e.target.value));
          }}
        />
        <ul className="flex justify-between w-full px-[10px]">
          {labels.map((label, index) => (
            <li key={label + index} className="flex justify-center relative">
              <span className="absolute">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
