import { memo } from "react";

export const Button = memo(
  ({
    value,
    type,
    styles,
    onClick,
  }: {
    value: string;
    type?: "button" | "submit" | "reset";
    styles?: string;
    onClick: () => void;
  }) => (
    <button
      type={type}
      // className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
      className={styles}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {value}
    </button>
  )
);
