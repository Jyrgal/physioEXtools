import { memo } from "react";

export const Text = memo(
  ({ value, styles }: { value: string; styles?: string }) => (
    <text
      // className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
      className={styles}
    >
      {value}
    </text>
  )
);
