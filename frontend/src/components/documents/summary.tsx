import { useEffect, useState } from "react";
import { Assessment } from "types/assessment";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

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

export function DocumentSummary({
  assessment,
  values,
}: {
  assessment?: Assessment;
  // eslint-disable-next-line
  values: Map<number, any>;
}) {
  // eslint-disable-next-line
  const [valuesMap, setValuesMap] = useState(new Map<number, any>());
  useEffect(() => {
    Object.entries(values).map(([key, value]) => {
      const updatedMap = valuesMap.set(parseInt(key), value);
      setValuesMap(updatedMap);
      return [key, value];
    });
  }, [values]);
  switch (assessment?.title) {
    case "Brief Illness Perceptions Survey": {
      const score: number =
        (valuesMap.get(0) || 0) +
        (valuesMap.get(1) || 0) +
        (valuesMap.get(2) || 0) +
        (valuesMap.get(3) || 0) +
        (valuesMap.get(4) || 0) +
        (valuesMap.get(5) || 0) +
        (valuesMap.get(6) || 0) +
        (valuesMap.get(7) || 0) +
        (valuesMap.get(8) || 0) +
        (valuesMap.get(9) || 0);
      return (
        <View style={styles.subheading} wrap={false}>
          <Text style={styles.body} wrap={false}>
            {`Score: ${score}`}
          </Text>
        </View>
      );
    }
    case "Brief Pain Inventory": {
      const briefPainInventoryPainScore: number = (
        (valuesMap.get(0) || 0) +
        (valuesMap.get(1) || 0) +
        (valuesMap.get(2) || 0) +
        (valuesMap.get(3) || 0) / 4
      ).toFixed(2);
      const briefPainInventoryPhysicalInterferenceScore: number = (
        (valuesMap.get(5) || 0) +
        (valuesMap.get(7) || 0) +
        (valuesMap.get(8) || 0) / 3
      ).toFixed(2);
      const briefPainInventoryAffectiveInterferenceScore: number = (
        (valuesMap.get(6) || 0) +
        (valuesMap.get(9) || 0) +
        (valuesMap.get(11) || 0) / 3
      ).toFixed(2);
      const briefPainInventorySleepInterferenceScore: number = (
        valuesMap.get(10) || 0
      ).toFixed(2);
      return (
        <View style={styles.subheading} wrap={false}>
          <Text style={styles.body} wrap={false}>
            Results:
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Pain: ${briefPainInventoryPainScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Physical Interference: ${briefPainInventoryPhysicalInterferenceScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Affective Interference: ${briefPainInventoryAffectiveInterferenceScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Sleep Interference: ${briefPainInventorySleepInterferenceScore}`}
          </Text>
        </View>
      );
    }
    case "P4 Instrument": {
      const morningScore: number = valuesMap.get(0) || 0;
      const afternoonScore: number = valuesMap.get(1) || 0;
      const eveningScore: number = valuesMap.get(2) || 0;
      const withActivityScore: number = valuesMap.get(3) || 0;
      const averageScore: number =
        (morningScore + afternoonScore + eveningScore + withActivityScore) / 4;
      return (
        <View style={styles.subheading} wrap={false}>
          <Text style={styles.body} wrap={false}>
            Results:
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Average Score: ${averageScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Morning Score: ${morningScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Afternoon Score: ${afternoonScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Evening Score: ${eveningScore}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {`With Activity Score: ${withActivityScore}`}
          </Text>
        </View>
      );
    }
    case "DN4 Questionnaire": {
      const score: number =
        (valuesMap.get(0) === "Yes" ? 1 : 0) +
        (valuesMap.get(1) === "Yes" ? 1 : 0) +
        (valuesMap.get(2) === "Yes" ? 1 : 0) +
        (valuesMap.get(3) === "Yes" ? 1 : 0) +
        (valuesMap.get(4) === "Yes" ? 1 : 0) +
        (valuesMap.get(5) === "Yes" ? 1 : 0) +
        (valuesMap.get(7) === "Yes" ? 1 : 0) +
        (valuesMap.get(8) === "Yes" ? 1 : 0) +
        (valuesMap.get(9) === "Yes" ? 1 : 0) +
        (valuesMap.get(10) === "Yes" ? 1 : 0);
      return (
        <View style={styles.subheading} wrap={false}>
          <Text style={styles.body} wrap={false}>
            Results:
          </Text>
          <Text style={styles.body} wrap={false}>
            {`Score: ${score}`}
          </Text>
          <Text style={styles.body} wrap={false}>
            {score < 4
              ? "This score does not suggests the presence of Neuropathic pain"
              : "This score suggests the presence of Neuropathic pain"}
          </Text>
        </View>
      );
    }
    default:
      return <div />;
  }
}
