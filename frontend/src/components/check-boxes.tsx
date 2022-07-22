import { memo, useState } from "react";

export const CheckBoxes = memo(({ inputs }: { inputs: string[] }) => {
  const [checked, setChecked] = useState<number[]>([]);
  return (
    <div className="flex flex-col justify-center items-center">
      {inputs.map((input, index) => (
        <div className="form-check">
          <input
            className="form-check-input h-4 w-4 border border-gray-500 rounded-sm mr-2 cursor-pointer"
            type="checkbox"
            value={index}
            onChange={() => {
              const foundIndex = checked.findIndex((value) => value === index);
              if (foundIndex === -1) {
                setChecked(checked.concat(index));
              } else {
                setChecked(checked);
              }
            }}
            checked={checked.includes(index)}
          />
          <label className="form-check-label inline-block text-gray-800">
            {input}
          </label>
        </div>
      ))}
    </div>
  );
});
