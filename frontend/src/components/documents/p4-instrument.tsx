import { memo } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getCurrentTime } from "utils";
import { Layout } from "components/documents/layout";

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
    paddingHorizontal: 10,
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
  body: {
    fontSize: 10,
  },
  bodySection: {
    margin: 5,
    marginHorizontal: 20,
    padding: 10,
    border: "1px solid gray",
  },
});

export const P4InstrumentDocument = memo(
  ({
    morningValue,
    afternoonValue,
    eveningValue,
    activityValue,
  }: {
    morningValue: number;
    afternoonValue: number;
    eveningValue: number;
    activityValue: number;
  }) => (
    <Layout>
      <View style={styles.section}>
        <Text style={styles.heading}>P4 Instrument</Text>
        <Text style={styles.heading}>
          Completed on:
          {getCurrentTime()}
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          1. On average, how bad has your pain been in the morning over the past
          2 days?
        </Text>
        <Text style={styles.body}>
          {morningValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          2. On average, how bad has your pain been in the afternoon over the
          past 2 days?
        </Text>
        <Text style={styles.body}>
          {afternoonValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          3. On average, how bad has your pain been in the evening over the past
          2 days?
        </Text>
        <Text style={styles.body}>
          {eveningValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          4. On average, how bad has your pain been with activity over the past
          2 days?
        </Text>
        <Text style={styles.body}>
          {activityValue}
          /10
        </Text>
      </View>
    </Layout>
  )
);
