import { memo } from 'react';

export const TextInput = memo(
  ({
    styles,
    placeholder,
    onChange,
  }: {
    styles?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
  }) => (
    <input
      className={styles}
      type="text"
      onChange={(e) => {
        e.preventDefault();
        // console.log(e.target.value);
        // onChange(parseInt(e.target.value));
        onChange && onChange(e.target.value);
      }}
      placeholder={placeholder}
    />
  ),
);
