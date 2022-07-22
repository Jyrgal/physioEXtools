import { Text } from "components/text";
import { memo, useEffect, useState } from "react";
import { Separator } from "components/separator";
import { usePDF } from "@react-pdf/renderer";
import { Download } from "components/download";
import { useAssessment } from "contexts/assessment";
import { Question } from "types/question";
import { Assessment } from "types/assessment";
import { QuestionGenerator } from "components/question";
import { Document } from "components/documents/document";
import { convertTitleCaseToDashCase } from "utils";

export const ToolScaffold = memo(
  ({ assessment }: { assessment?: Assessment }) => {
    const [values, setValues] = useState(
      new Map<number, string | string[] | number>()
    );
    const [loading, setLoading] = useState(false);
    const { questionsMap } = useAssessment();
    let questions: Question[] | undefined;
    if (assessment?.title) {
      questions = questionsMap.get(assessment.title);
    }

    const [instance, updateInstance] = usePDF({
      document: (
        <Document
          assessment={assessment}
          questions={questions}
          values={values}
        />
      ),
    });
    useEffect(() => {
      updateInstance();
    }, [values, updateInstance]);

    return (
      <div className="flex flex-col">
        <span className="self-start text-2xl font-semibold whitespace-nowrap ">
          {assessment?.title}
        </span>
        {/* <Button
          value='questions'
          onClick={() => {
            console.log(values);
          }}
        /> */}
        {assessment?.description?.map((d) => (
          <Text value={d} />
        ))}
        {questions?.map((question, i) => (
          <>
            <QuestionGenerator
              question={question}
              onClick={(value) => setValues({ ...values, [i]: value })}
            />
            <Separator />
          </>
        ))}
        <Download
          download={`${convertTitleCaseToDashCase(
            assessment?.title || "assessment"
          )}.pdf`}
          onClick={() => {
            setLoading(true);
            setLoading(false);
          }}
          loading={loading}
          url={instance.url || ""}
        />
      </div>
    );
  }
);
