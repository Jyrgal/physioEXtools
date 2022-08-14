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
    initialValue,
  }: {
    title: string;
    values?: string[];
    minValue?: number;
    maxValue?: number;
    onChange?: (value: number) => void;
    initialValue?: number;
  }) => {
    const [value, setValue] = useState<number>();
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
            initialValue={initialValue}
          />
        </div>
        <div className="mt-8 flex flex-row justify-between">
          {values?.map((value, index) => (
            <Text key={value + index} styles="font-light" value={value} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Text
            styles="font-medium justify-self-center"
            value={value?.toString() || initialValue?.toString() || "0"}
          />
        </div>
      </div>
    );
  }
);
