import { ChartBarIcon } from "@heroicons/react/outline";

export const removeSpacesAndToLowerCase = (value: string) =>
  value.replaceAll(" ", "").toLowerCase();

export const removePunctuation = (value: string) =>
  value.replaceAll(/[^\p{L}\s]/gu, "");

export const enumToStringArray = (enums: { [key: string]: string }): string[] =>
  Object.keys(enums).map((name) => enums[name as keyof typeof enums]);

export const stringToEnum = (
  enumType: { [key: string]: string },
  enumValue: string | null | undefined
): string => {
  const enums = Object.values(enumType);
  if (
    enumValue === null ||
    enumValue === undefined ||
    !enums.includes(enumValue)
  ) {
    return "UNKNOWN";
  }
  const eunmIndex = enums.indexOf(enumValue);
  return Object.keys(enumType)[eunmIndex];
};

export const convertTitleCaseToDashCase = (value: string): string =>
  value.toLowerCase().replaceAll(" ", "-");

export const convertTitleCaseToURL = (value: string): string =>
  value.toLowerCase().replaceAll(" ", "%20");

export const covertDashCaseToTitleCase = (value: string): string =>
  value
    .toLowerCase()
    .replaceAll("-", " ")
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

export const getIcon = (name?: string): JSX.Element => (
  <ChartBarIcon
    name={name}
    className="flex-shrink-0 h-6 w-6 text-indigo-600"
    aria-hidden="true"
  />
);

export const convertTabValuesToInteger = (value: string): number => {
  switch (value) {
    case "Never":
      return 0;
    case "Rarely":
      return 1;
    case "Sometimes":
      return 2;
    case "Often":
      return 3;
    case "Always":
      return 4;
    default:
      return 0;
  }
};

export const covertTitleCaseToDashCase = (value: string): string =>
  value.replace(" ", "-").toLowerCase();

export const getCurrentTime = () => {
  const current = new Date();
  return `${current.toLocaleDateString()} ${current.toLocaleTimeString(
    "en-AU"
  )}`;
};
