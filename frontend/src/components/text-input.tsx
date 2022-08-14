import { memo, useEffect, useState } from "react";

export const TextInput = memo(
  ({
    type = "text",
    value,
    styles,
    placeholder,
    onBlur,
  }: {
    type?: string;
    value?: string;
    styles?: string;
    placeholder?: string;
    onBlur?: (value: string) => void;
  }) => {
    const [currValue, setCurrValue] = useState(value || "");
    useEffect(() => {
      setCurrValue(value || "");
    }, [value]);
    return (
      <input
        className={styles}
        type={type}
        onChange={(e) => {
          e.preventDefault();
          setCurrValue(e.target.value);
        }}
        onBlur={(e) => {
          e.preventDefault();
          onBlur && onBlur(e.target.value);
          setCurrValue(e.target.value);
        }}
        placeholder={placeholder}
        value={currValue}
      />
    );
  }
);
