import { Question, Type } from "types/question";
import { AssessmentRange } from "components/assessment-range";
import { TextInput } from "components/text-input";
import { Text } from "components/text";
import { memo, useRef } from "react";
import { Tabs } from "components/tabs";
import { RadioButtons } from "components/radio-buttons";
import { CheckBoxes } from "components/check-boxes";
import { ColourRange } from "components/colour-range";
import { Separator } from "components/separator";

export const QuestionGenerator = memo(
  ({
    question,
    onClick,
    value,
  }: {
    question: Question;
    onClick: (value: string | string[] | number) => void;
    value?: string | string[] | number;
  }): JSX.Element => {
    const emptyArray = [...Array(question.number)];
    const inputs = useRef<string[]>(emptyArray.map(() => ""));
    switch (question.type) {
      case Type.TEXT: {
        let styles = "";
        switch (question.style) {
          case "light":
            styles = "font-light text-sm";
            break;
          case "bold":
            styles = "font-bold";
            break;
          case "subheading":
            styles = "text-xl font-medium";
            break;
          case "heading":
            styles = "text-2xl font-semibold";
            break;
          default:
            styles = "";
        }
        return <Text value={question.title || ""} styles={`mt-10 ${styles}`} />;
      }
      case Type.RANGE: {
        return (
          <AssessmentRange
            key={question.id + question.title}
            title={question.title || ""}
            minValue={question.minimum || 0}
            maxValue={question.maximum || 10}
            onChange={(value) => onClick(value)}
            values={question.values || []}
            initialValue={Number(value || 0)}
          />
        );
      }
      case Type.TEXT_INPUT: {
        return (
          <>
            <Text styles="font-medium" value={question.title || ""} />
            <div className="mt-6 w-2/3 self-center flex items-center justify-center">
              <TextInput
                styles="flex-1 border border-gray-300 rounded-md p-2"
                onBlur={(value) => {
                  onClick(value);
                }}
                value={String(value || "")}
              />
            </div>
          </>
        );
      }
      case Type.TEXT_INPUT_MULTIPLE: {
        const values: string[] = (value as string[]) || [];
        return (
          <div>
            <Text styles="font-medium" value={question.title || ""} />
            <div className="mt-6 w-2/3 self-center space-y-3">
              {emptyArray.map((_, i) => {
                const index = i + 1;
                return (
                  <div
                    key={question.id + i}
                    className="flex flex-row items-center justify-center"
                  >
                    <Text value={`${index}.`} styles="mr-4" />
                    <TextInput
                      styles="flex-1 border border-gray-300 rounded-md p-2"
                      onBlur={(value) => {
                        inputs.current = [...values];
                        inputs.current[i] = value;
                        onClick(inputs.current);
                      }}
                      value={values[i]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
      case Type.TABS: {
        const index = question.values?.indexOf(value as string);
        return (
          <div className="mt-5 flex flex-col lg:flex-row lg:space-x-4 h-auto justify-between items-center border-2 border-gray-200 rounded-lg p-4">
            <Text
              styles="whitespace-pre-wrap max-w-md"
              value={question.title || ""}
            />
            <Tabs
              styles="mt-2 max-w-lg"
              values={question.values || [""]}
              onClick={(value) =>
                onClick(question.values?.indexOf(String(value)) || 0)
              }
              defaultIndex={index}
            />
          </div>
        );
      }
      case Type.RADIO_BUTTONS: {
        const index = question.values?.indexOf(value as string);
        return (
          <div className="justify-start">
            <Text value={question.title || ""} />
            <div className="mt-2">
              <RadioButtons
                values={question.values || [""]}
                onClick={(value) =>
                  onClick(question.values?.indexOf(String(value)) || 0)
                }
                selected={index === -1 ? 0 : index}
              />
            </div>
          </div>
        );
      }
      case Type.CHECK_BOXES: {
        return (
          <div className="justify-start">
            <Text value={question.title || ""} />
            <CheckBoxes inputs={question.values || [""]} />
          </div>
        );
      }
      case Type.COLOUR_RANGE: {
        return (
          <div className="justify-start">
            <Text value={question.title || ""} />
            <ColourRange
              initialValue={Number(value) || 0}
              onChange={(index) => onClick(index)}
              values={question.values || [""]}
            />
          </div>
        );
      }
      case Type.SEPARATOR: {
        return <Separator />;
      }
      default: {
        return <div />;
      }
    }
  }
);
