import { memo, useEffect, useState } from "react";

export const SideBar = memo(
  ({
    title,
    values,
    onChange,
  }: {
    title?: string;
    values?: string[];
    onChange: (value: string) => void;
  }) => {
    const [selected, setSelected] = useState<string>();
    useEffect(() => {
      setSelected((values && values[0]) || "");
    }, values);
    return (
      <div className="w-80 shadow-md bg-white p-1">
        {title}
        <ul className="relative mt-2">
          <li className="relative space-y-1">
            {values?.map((value, index) => (
              <button
                key={value + index}
                className={`flex w-full cursor-pointer select-none items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  transition duration-300 ease-in-out ${
                  selected === value
                    ? "text-blue-800 bg-blue-100"
                    : "hover:text-gray-900 hover:bg-gray-100"
                }`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
                onClick={() => {
                  if (selected !== value) {
                    setSelected(value);
                    onChange(value);
                  }
                }}
              >
                {value}
              </button>
            ))}
          </li>
        </ul>
      </div>
    );
  }
);
