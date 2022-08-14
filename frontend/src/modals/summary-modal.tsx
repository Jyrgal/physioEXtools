import { memo, useEffect } from "react";
import { Assessment } from "types/assessment";
import { Summary } from "components/summary";
import Modal from "react-modal";
import { Download } from "components/download";
import {
  usePDF,
  View,
  Text as DocumentText,
  StyleSheet,
} from "@react-pdf/renderer";
import { Document } from "components/documents/document";
import { useAssessment } from "contexts/assessment";
import { Layout } from "components/documents/layout";
import { DocumentSummary } from "components/documents/summary";

const styles = StyleSheet.create({
  heading: {
    fontWeight: 600,
    fontSize: 18,
  },
  subheading: {
    fontWeight: 600,
    fontSize: 14,
  },
});

export const SummaryModal = memo(
  ({
    open,
    onDismiss,
    values,
    assessments,
  }: {
    open: boolean;
    onDismiss: () => void;
    // eslint-disable-next-line
    values: Map<string, any>;
    assessments?: (Assessment | undefined)[];
  }) => {
    const { questionsMap } = useAssessment();

    const [instance, updateInstance] = usePDF({
      document: (
        <Layout>
          <View>
            <DocumentText style={styles.heading}>
              Assessments Summary:
            </DocumentText>
            {assessments?.map((assessment, index) => (
              <View key={`document-summary-${assessment?.id}-${index}`}>
                <DocumentText style={styles.subheading}>
                  {assessment?.title}
                </DocumentText>
                <DocumentSummary
                  assessment={assessment}
                  values={values.get(assessment?.id || "")}
                />
              </View>
            ))}
            {assessments?.map((assessment, index) => (
              <Document
                key={`document-combine-${assessment?.id}-${index}`}
                assessment={assessment}
                questions={questionsMap.get(assessment?.id || "")}
                values={values.get(assessment?.id || "")}
              />
            ))}
          </View>
        </Layout>
      ),
    });
    useEffect(() => {
      updateInstance();
    }, [updateInstance]);
    return (
      <Modal
        isOpen={open}
        onRequestClose={() => onDismiss()}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%",
            padding: 48,
          },
        }}
        ariaHideApp={false}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="self-start text-2xl font-semibold whitespace-nowrap ">
              Summary of all assessments:
            </span>
            {assessments?.map((assessment) => {
              return (
                <div
                  key={`assessment-summaries-${assessment?.id}`}
                  className="mt-4 flex flex-col"
                >
                  <span className="self-start text-xxl font-semibold whitespace-nowrap ">
                    {assessment?.title}
                  </span>
                  <Summary
                    assessment={assessment}
                    values={
                      values.get(assessment?.id || "") ||
                      new Map<string, string | string[] | number>()
                    }
                  />
                </div>
              );
            })}
          </div>
          <Download
            download="assessments-summary.pdf"
            loading={false}
            url={instance.url || ""}
          />
        </div>
      </Modal>
    );
  }
);
