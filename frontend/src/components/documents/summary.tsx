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
  values?: Map<string, any>;
}) {
  switch (assessment?.id) {
    case "BIPS": {
      const score: number =
        (values?.get("BIPS-1") || 0) +
        (values?.get("BIPS-2") || 0) +
        (values?.get("BIPS-3") || 0) +
        (values?.get("BIPS-4") || 0) +
        (values?.get("BIPS-5") || 0) +
        (values?.get("BIPS-6") || 0) +
        (values?.get("BIPS-7") || 0) +
        (values?.get("BIPS-8") || 0) +
        (values?.get("BIPS-9") || 0) +
        (values?.get("BIPS-10") || 0);
      return (
        <View style={styles.subheading} wrap={false}>
          <Text style={styles.body} wrap={false}>
            {`Score: ${score}`}
          </Text>
        </View>
      );
    }
    case "BPI": {
      const briefPainInventoryPainScore: string = (
        ((values?.get("BPI-1") || 0) +
          (values?.get("BPI-2") || 0) +
          (values?.get("BPI-3") || 0) +
          (values?.get("BPI-4") || 0)) /
        4
      ).toFixed(2);
      const briefPainInventoryPhysicalInterferenceScore: string = (
        ((values?.get("BPI-5") || 0) +
          (values?.get("BPI-7") || 0) +
          (values?.get("BPI-8") || 0)) /
        3
      ).toFixed(2);
      const briefPainInventoryAffectiveInterferenceScore: string = (
        ((values?.get("BPI-6") || 0) +
          (values?.get("BPI-9") || 0) +
          (values?.get("BPI-11") || 0)) /
        3
      ).toFixed(2);
      const briefPainInventorySleepInterferenceScore: string = (
        values?.get("BPI-10") || 0
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
    case "P4I": {
      const morningScore: number = values?.get("P4I-1") || 0;
      const afternoonScore: number = values?.get("P4I-2") || 0;
      const eveningScore: number = values?.get("P4I-3") || 0;
      const withActivityScore: number = values?.get("P4I-4") || 0;
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
    case "DN4Q": {
      const score: number =
        (values?.get("DN4Q-1") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-2") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-3") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-4") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-5") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-6") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-7") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-8") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-9") === "Yes" ? 1 : 0) +
        (values?.get("DN4Q-10") === "Yes" ? 1 : 0);
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
    case "SRI": {
      const SRISumOfWeightedScores: number =
        (values?.get("SRI-1a") || 0) * (values?.get("SRI-1b") || 0) +
        (values?.get("SRI-2a") || 0) * (values?.get("SRI-2b") || 0) +
        (values?.get("SRI-3a") || 0) * (values?.get("SRI-3b") || 0) +
        (values?.get("SRI-4a") || 0) * (values?.get("SRI-4b") || 0) +
        (values?.get("SRI-5a") || 0) * (values?.get("SRI-5b") || 0) +
        (values?.get("SRI-6a") || 0) * (values?.get("SRI-6b") || 0) +
        (values?.get("SRI-7a") || 0) * (values?.get("SRI-7b") || 0) +
        (values?.get("SRI-8a") || 0) * (values?.get("SRI-8b") || 0) +
        (values?.get("SRI-9a") || 0) * (values?.get("SRI-9b") || 0) +
        (values?.get("SRI-10a") || 0) * (values?.get("SRI-10b") || 0);
      const SRISumOfImportanceScores: number =
        (values?.get("SRI-1a") || 0) +
        (values?.get("SRI-2a") || 0) +
        (values?.get("SRI-3a") || 0) +
        (values?.get("SRI-4a") || 0) +
        (values?.get("SRI-5a") || 0) +
        (values?.get("SRI-6a") || 0) +
        (values?.get("SRI-7a") || 0) +
        (values?.get("SRI-8a") || 0) +
        (values?.get("SRI-9a") || 0) +
        (values?.get("SRI-10a") || 0);
      const percentHealthRelatedSatisfaction =
        (SRISumOfImportanceScores / SRISumOfWeightedScores) * 10;
      return (
        <View style={styles.subheading} wrap={false}>
          <Text style={styles.body} wrap={false}>
            {`Score: ${percentHealthRelatedSatisfaction}`}
          </Text>
        </View>
      );
    }
    default:
      return <div />;
  }
}
