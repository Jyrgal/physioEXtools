import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { convertTabValuesToInteger, getCurrentTime } from "utils";
import { Layout } from "components/documents/layout";
import { Assessment } from "types/assessment";
import { Question, Type } from "types/question";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
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
  },
});

export function Document({
  assessment,
  values,
  questions,
}: {
  assessment?: Assessment;
  // eslint-disable-next-line
  values: Map<number, any>;
  questions?: Question[];
}) {
  // eslint-disable-next-line
  const [valuesMap, setValuesMap] = useState(new Map<number, any>());
  useEffect(() => {
    Object.entries(values).map(([key, value]) => {
      const updatedMap = valuesMap.set(parseInt(key), value);
      setValuesMap(updatedMap);
      return [key, value];
    });
  }, [values, valuesMap]);
  return (
    <Layout>
      <View style={styles.section}>
        <Text style={styles.heading}>{assessment?.title}</Text>
        <Text style={styles.heading}>
          Completed on:
          {getCurrentTime()}
        </Text>
        {questions?.map((question, i) => {
          const value = valuesMap.get(i);
          switch (question.type) {
            case Type.TEXT: {
              return (
                <View style={styles.subheading} wrap={false}>
                  <Text style={styles.body} wrap={false}>
                    {question.title}
                  </Text>
                </View>
              );
            }
            case Type.RANGE: {
              return (
                <View style={styles.bodySection} wrap={false}>
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
                <View style={styles.bodySection} wrap={false}>
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
                <View style={styles.bodySection} wrap={false}>
                  <Text style={styles.body} wrap={false}>
                    {question.title}
                  </Text>
                  {arrayValues.map((a, i) => (
                    <Text style={styles.body}>
                      {i + 1}.{a}
                    </Text>
                  ))}
                </View>
              );
            }
            case Type.TABS: {
              return (
                <View style={styles.tabBodySection} wrap={false}>
                  <Text style={styles.body} wrap={false}>
                    {question.title}
                  </Text>
                  <Text style={styles.body} wrap={false}>
                    {value || question?.values?.[0]} (
                    {convertTabValuesToInteger(value)})
                  </Text>
                </View>
              );
            }
            default: {
              return <View />;
            }
          }
        })}
      </View>
    </Layout>
  );
}
