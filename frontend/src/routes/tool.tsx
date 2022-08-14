import { usePDF } from "@react-pdf/renderer";
import { Button } from "components/button";
import { Download } from "components/download";
import { SideBar } from "components/side-bar";
import { Summary } from "components/summary";
import { ToolScaffold } from "components/tool-scaffold";
import { useAssessment } from "contexts/assessment";
import { SummaryModal } from "modals/summary-modal";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Assessment } from "types/assessment";
import { Question } from "types/question";
import { Document } from "components/documents/document";
import { Layout } from "components/documents/layout";

export const Tool = memo(() => {
  const { toolIds } = useParams();
  const { assessmentsMap, questionsMap } = useAssessment();
  // const questions: Question[] | undefined = questionsMap.get(
  //   selectedAssessment?.id || '',
  // );
  const parsedIds = toolIds?.split("&");
  const filteredAssessments = parsedIds?.map((id) => assessmentsMap.get(id));
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment>();
  const [selectedSummaryMap, setSelectedSummaryMap] = useState<
    Map<string, string | string[] | number> | undefined
  >();
  const [selectedQuestions, setSelectedQuestions] = useState<
    Question[] | undefined
  >();
  const [summaryMap, setSummaryMap] = useState(
    new Map<string, Map<string, string | string[] | number>>()
  );
  const [summaryModalOpen, setSummaryModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    !selectedAssessment &&
      setSelectedAssessment(filteredAssessments && filteredAssessments[0]);
  }, [filteredAssessments]);

  // useEffect(() => {
  //   // const updatedMap = new Map(
  //   //   summaryMap.set(selectedAssessment?.id || '', selectedSummaryMap),
  //   // );
  //   // setSummaryMap(updatedMap);
  //   setSelectedSummaryMap(
  //     summaryMap.get(selectedAssessment?.id || '') ||
  //       new Map<string, string | string[] | number>(),
  //   );
  // }, [selectedAssessment]);
  useEffect(() => {
    const newSummaryMap = new Map(summaryMap.get(selectedAssessment?.id || ""));
    setSelectedSummaryMap(newSummaryMap);
    setSelectedQuestions(questionsMap.get(selectedAssessment?.id || ""));
  }, [summaryMap]);

  const [instance, updateInstance] = usePDF({
    document: (
      <Layout key={`document-${selectedAssessment?.id}`}>
        <Document
          assessment={selectedAssessment}
          questions={selectedQuestions}
          values={selectedSummaryMap}
        />
      </Layout>
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [selectedSummaryMap, updateInstance]);

  return (
    <div
      className={`${
        filteredAssessments?.length === 1 ? "md:px-24" : "flex flex-row h-full"
      }`}
    >
      {filteredAssessments?.length !== 1 && (
        <div className="max-h-fit flex-auto">
          <SideBar
            title="Assessments"
            values={
              filteredAssessments?.map(
                (assessment) => assessment?.title || ""
              ) || []
            }
            onChange={(name) => {
              // const updatedMap = new Map(
              //   summaryMap.set(
              //     selectedAssessment?.id || '',
              //     selectedSummaryMap,
              //   ),
              // );
              // setSummaryMap(updatedMap);
              let filteredAssessment;
              assessmentsMap.forEach((assessment) => {
                if (assessment.title === name) {
                  filteredAssessment = assessment;
                }
              });
              setSelectedAssessment(filteredAssessment);
              // setSelectedSummaryMap(
              //   new Map<string, string | string[] | number>(),
              // );
            }}
          />
          <div className="w-full mt-5 flex items-center justify-center">
            <Button
              value="View Summary"
              type="submit"
              styles="w-4/5 self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2"
              onClick={() => {
                setSummaryModalOpen(true);
                // console.log(summaryMap);
              }}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col mx-10 w-full">
        {selectedAssessment && (
          <>
            <ToolScaffold
              key={selectedAssessment.id}
              assessment={selectedAssessment}
              onSetValue={(value) => {
                // const updatedMap = new Map([...selectedSummaryMap, ...value]);
                const tempMap = new Map<string, string | string[] | number>();
                Object.entries(value).forEach(([key, value]) =>
                  tempMap.set(key, value)
                );
                const currentMap =
                  summaryMap.get(selectedAssessment?.id || "") ||
                  new Map<string, string | string[] | number>();
                const updatedMap = new Map([...currentMap, ...tempMap]);
                // setSelectedSummaryMap(updatedMap);
                const newMap = new Map(
                  summaryMap.set(selectedAssessment?.id || "", updatedMap)
                );
                setSummaryMap(newMap);
              }}
              initialValues={summaryMap.get(selectedAssessment?.id || "")}
            />
            <Summary
              assessment={selectedAssessment}
              values={selectedSummaryMap}
            />
            <Download
              download={`${selectedAssessment?.title || "assessment"}.pdf`}
              onClick={() => {
                setLoading(true);
                setLoading(false);
              }}
              loading={loading}
              url={instance.url || ""}
            />
          </>
        )}
        {/* {filteredAssessments?.map((name) => (
          <ToolScaffold
            key={name}
            assessment={assessmentsMap.get(
              parseURLNameToAssessmentTitle(name).toLowerCase(),
            )}
          />
        ))} */}
        {filteredAssessments && filteredAssessments.length > 1 && (
          <SummaryModal
            open={summaryModalOpen}
            onDismiss={() => {
              setSummaryModalOpen(false);
            }}
            values={summaryMap}
            assessments={filteredAssessments}
          />
        )}
      </div>
    </div>
  );
});

export default Tool;
