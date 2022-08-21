import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getCurrentTime } from "utils";
import { Assessment } from "types/assessment";
import { Question, Type } from "types/question";
import { DocumentSummary } from "./summary";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    display: "flex",
    fontFamily: "Open Sans",
  },
  header: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: 14,
  },
  section: {
    margin: 5,
    paddingHorizontal: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  heading: {
    fontWeight: 600,
    fontSize: 14,
  },
  subheading: {
    marginVertical: 10,
  },
  body: {
    fontSize: 10,
  },
  bodySection: {
    margin: 5,
    marginHorizontal: 20,
    padding: 10,
    border: "1px solid gray",
  },
  tabBodySection: {
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    border: "1px solid gray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
  },
  tabBodyQuestion: {
    width: "83%",
  },
  tabBodyAnswer: {
    width: "15%",
  },
  buttonBodySection: {
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    fontSize: 10,
  },
  buttonBodyQuestion: {},
  buttonBodyAnswer: {
    marginTop: 5,
  },
});

export function Document({
  assessment,
  values,
  questions,
}: {
  assessment?: Assessment;
  // eslint-disable-next-line
  values?: Map<string, any>;
  questions?: Question[];
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>{assessment?.title}</Text>
      <Text style={styles.heading}>Completed on: {getCurrentTime()}</Text>
      {questions?.map((question, index) => {
        const value = values?.get(question.id || "");
        switch (question.type) {
          case Type.TEXT: {
            return (
              <View
                key={question.id + index}
                style={styles.subheading}
                wrap={false}
              >
                <Text style={styles.body} wrap={false}>
                  {question.title}
                </Text>
              </View>
            );
          }
          case Type.RANGE: {
            return (
              <View
                key={question.id + index}
                style={styles.bodySection}
                wrap={false}
              >
                <Text style={styles.body} wrap={false}>
                  {question.title}
                </Text>
                <Text style={styles.body} wrap={false}>
                  {value || 0}
                  /10
                </Text>
              </View>
            );
          }
          case Type.TEXT_INPUT: {
            return (
              <View
                key={question.id + index}
                style={styles.bodySection}
                wrap={false}
              >
                <Text style={styles.body} wrap={false}>
                  {question.title}
                </Text>
                <Text style={styles.body}>{value}</Text>
              </View>
            );
          }
          case Type.TEXT_INPUT_MULTIPLE: {
            let arrayValues: string[];
            if (!value) {
              arrayValues = [];
            } else {
              arrayValues = value as string[];
            }
            return (
              <View
                key={question.id + index}
                style={styles.bodySection}
                wrap={false}
              >
                <Text style={styles.body} wrap={false}>
                  {question.title}
                </Text>
                {arrayValues.map((a, i) => (
                  <Text key={a + i} style={styles.body}>
                    {i + 1}.{a}
                  </Text>
                ))}
              </View>
            );
          }
          case Type.TABS: {
            const questionIndex = question?.values?.indexOf(value);
            return (
              <View
                key={question.id + index}
                style={styles.tabBodySection}
                wrap={false}
              >
                <Text style={styles.tabBodyQuestion} wrap={false}>
                  {question.title}
                </Text>
                <Text style={styles.tabBodyAnswer} wrap={false}>
                  {value || question?.values?.[0]} (
                  {questionIndex === -1 ? 0 : questionIndex})
                </Text>
              </View>
            );
          }
          case Type.RADIO_BUTTONS: {
            const questionIndex = question?.values?.indexOf(value);
            return (
              <View
                key={question.id + index}
                style={styles.buttonBodySection}
                wrap={false}
              >
                <Text style={styles.buttonBodyQuestion} wrap={false}>
                  {question.title}
                </Text>
                <Text style={styles.buttonBodyAnswer} wrap={false}>
                  {value || question?.values?.[0]} (
                  {questionIndex === -1 ? 0 : questionIndex})
                </Text>
              </View>
            );
          }
          case Type.COLOUR_RANGE: {
            return (
              <View
                key={question.id + index}
                style={styles.bodySection}
                wrap={false}
              >
                <Text style={styles.body} wrap={false}>
                  {question.title}
                </Text>
                <Text style={styles.body} wrap={false}>
                  {((question?.values?.length || 0) - 1 || 0) - value}.{" "}
                  {question && question.values && question.values[value]}
                </Text>
              </View>
            );
          }
          default: {
            return <View key={question.id + index} />;
          }
        }
      })}
      <DocumentSummary assessment={assessment} values={values} />
    </View>
  );
}
