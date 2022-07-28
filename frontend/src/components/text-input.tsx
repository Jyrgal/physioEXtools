import { memo } from "react";

export const TextInput = memo(
  ({
    type = "text",
    styles,
    placeholder,
    onChange,
  }: {
    type?: string;
    styles?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
  }) => (
    <input
      className={styles}
      type={type}
      onChange={(e) => {
        e.preventDefault();
        // console.log(e.target.value);
        // onChange(parseInt(e.target.value));
        onChange && onChange(e.target.value);
      }}
      placeholder={placeholder}
    />
  )
);
