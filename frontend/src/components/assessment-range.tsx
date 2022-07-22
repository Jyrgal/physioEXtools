import { memo, useState } from "react";
import { Text } from "components/text";
import { Range } from "components/range";

export const AssessmentRange = memo(
  ({
    title,
    minText,
    maxText,
    minValue = 0,
    maxValue = 10,
    onChange,
  }: {
    title: string;
    minText: string;
    maxText: string;
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
        <div className="mt-8 grid-cols-3 grid">
          <Text styles="font-light" value={minText} />
          <Text
            styles="font-medium justify-self-center"
            value={value?.toString()}
          />
          <Text styles="font-light justify-self-end" value={maxText} />
        </div>
      </div>
    );
  }
);
