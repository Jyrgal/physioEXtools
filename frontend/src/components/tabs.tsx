import { memo } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Tabs = memo(
  ({
    values,
    styles,
    onClick,
    defaultIndex = 0,
  }: {
    values: string[];
    styles?: string;
    onClick: (value: string) => void;
    defaultIndex?: number;
  }) => {
    return (
      <div className={`w-full ${styles}`}>
        <Tab.Group defaultIndex={defaultIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
            {values.map((value, index) => (
              <Tab
                key={value + index}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-600 hover:text-blue-400"
                  )
                }
                onClick={() => onClick(value)}
              >
                {value}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    );
  }
);
