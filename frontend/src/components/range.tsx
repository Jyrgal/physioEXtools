import { memo } from "react";

export const Range = memo(
  ({
    min,
    max,
    step,
    onChange,
  }: {
    min: number;
    max: number;
    step: number;
    onChange?: (value: number) => void;
  }) => {
    const length = (max - min) / step + 1;
    const labels = Array.from({ length }, (_, i) => min + i * step);

    return (
      <div>
        <input
          type="range"
          className="w-full outline-none focus:outline-none focus:ring-0 focus:shadow-none"
          min={min}
          max={max}
          step={step}
          defaultValue={min}
          onChange={(e) => {
            e.preventDefault();
            // console.log(e.target.value);
            // onChange(parseInt(e.target.value));
            onChange && onChange(parseInt(e.target.value));
          }}
        />
        <ul className="flex justify-between w-full px-[10px]">
          {labels.map((label) => (
            <li className="flex justify-center relative">
              <span className="absolute">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
