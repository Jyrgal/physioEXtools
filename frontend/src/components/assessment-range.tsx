import { memo, useState } from "react";
import { Text } from "components/text";
import { Range } from "components/range";

export const AssessmentRange = memo(
  ({
    title,
    values,
    minValue = 0,
    maxValue = 10,
    onChange,
  }: {
    title: string;
    values?: string[];
    minValue?: number;
    maxValue?: number;
    onChange?: (value: number) => void;
  }) => {
    const [value, setValue] = useState<number>(0);
    return (
      <div>
        <div className="mt-4">
          <Text styles="font-medium" value={title} />
          <Range
            min={minValue}
            max={maxValue}
            step={1}
            onChange={(newValue) => {
              setValue(newValue);
              onChange && onChange(newValue);
            }}
          />
        </div>
        <div className="mt-8 flex flex-row justify-between">
          {values?.map((value) => (
            <Text styles="font-light" value={value} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Text
            styles="font-medium justify-self-center"
            value={value?.toString()}
          />
        </div>
      </div>
    );
  }
);
