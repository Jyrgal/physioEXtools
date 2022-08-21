import { Text } from "components/text";
import { memo, useEffect, useState } from "react";
import { Separator } from "components/separator";
import { useAssessment } from "contexts/assessment";
import { Question } from "types/question";
import { Assessment } from "types/assessment";
import { QuestionGenerator } from "components/question";

export const ToolScaffold = memo(
  ({
    assessment,
    initialValues,
    onSetValue,
  }: {
    assessment?: Assessment;
    initialValues?: Map<string, string | string[] | number>;
    onSetValue?: (value: Map<string, string | string[] | number>) => void;
  }) => {
    const [values, setValues] = useState(
      new Map<string, string | string[] | number>()
    );
    const { questionsMap } = useAssessment();
    const questions: Question[] | undefined = questionsMap.get(
      assessment?.id || ""
    );

    useEffect(() => {
      onSetValue && onSetValue(values);
    }, [values]);

    return (
      <div className="flex flex-col">
        <span className="self-start text-2xl font-semibold whitespace-nowrap ">
          {assessment?.title}
        </span>
        {assessment &&
          assessment.description?.map((d, i) => <Text value={d} key={d + i} />)}
        {questions &&
          questions.map((question, index) => (
            <div key={question && question.id + index}>
              <QuestionGenerator
                question={question}
                onClick={(value) => {
                  setValues((prevValue) => {
                    const newValue = {
                      ...prevValue,
                      [question.id]: value,
                    };
                    // onSetValue && onSetValue(newValue);
                    return newValue;
                  });
                }}
                value={initialValues?.get(question.id)}
              />
              <Separator />
            </div>
          ))}
      </div>
    );
  }
);
