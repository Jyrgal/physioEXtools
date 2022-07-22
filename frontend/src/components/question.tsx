import { Question, QuestionNS } from 'types';
import { AssessmentRange } from 'components/assessment-range';
import { TextInput } from 'components/text-input';
import { Text } from 'components/text';
import { memo, useRef } from 'react';
import { Tabs } from 'components/tabs';

export const QuestionGenerator = memo(
  ({
    question,
    onClick,
  }: {
    question: Question;
    onClick: (value: string | string[] | number) => void;
  }): JSX.Element => {
    const emptyArray = [...Array(question.number)];
    const inputs = useRef<string[]>(emptyArray.map(() => ''));
    switch (question.type) {
      case QuestionNS.Type.TEXT: {
        return <Text value={question.title || ''} styles="mt-10" />;
      }
      case QuestionNS.Type.RANGE: {
        return (
          <AssessmentRange
            title={question.title || ''}
            minText={question.minimumText || ''}
            maxText={question.maximumText || ''}
            minValue={question.minimum || 0}
            maxValue={question.maximum || 10}
            onChange={(value) => onClick(value)}
          />
        );
      }
      case QuestionNS.Type.TEXT_INPUT: {
        return (
          <>
            <Text styles="font-medium" value={question.title || ''} />
            <div className="mt-6 w-2/3 self-center space-y-3">
              <TextInput
                styles="flex-1 border border-gray-300 rounded-md p-2"
                onChange={(value) => {
                  onClick(value);
                }}
              />
            </div>
          </>
        );
      }
      case QuestionNS.Type.TEXT_INPUT_MULTIPLE: {
        return (
          <>
            <Text styles="font-medium" value={question.title || ''} />
            <div className="mt-6 w-2/3 self-center space-y-3">
              {emptyArray.map((_, i) => {
                const index = i + 1;
                return (
                  <div className="flex flex-row items-center justify-center">
                    <Text value={`${index}.`} styles="mr-4" />
                    <TextInput
                      styles="flex-1 border border-gray-300 rounded-md p-2"
                      onChange={(value) => {
                        inputs.current[i] = value;
                        onClick(inputs.current);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </>
        );
      }
      case QuestionNS.Type.TABS: {
        return (
          <div className="mt-5 flex flex-col lg:flex-row h-auto justify-between items-center border-2 border-gray-200 rounded-lg p-4">
            <Text value={question.title || ''} />
            <Tabs
              styles="mt-2"
              values={question.values || ['']}
              onClick={(value) => onClick(value)}
            />
          </div>
        );
      }
      default: {
        return <div />;
      }
    }
  },
);
