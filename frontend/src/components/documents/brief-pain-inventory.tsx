import { memo } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getCurrentTime } from 'utils';
import { Layout } from 'components/documents/layout';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    display: 'flex',
    fontFamily: 'Open Sans',
  },
  header: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    border: '1px solid gray',
  },
});

export const BriefPainInventoryDocument = memo(
  ({
    worstValue,
    bestValue,
    averageValue,
    nowValue,
    generalValue,
    moodValue,
    walkingValue,
    normalValue,
    relationValue,
    sleepValue,
    lifeValue,
  }: {
    worstValue: number;
    bestValue: number;
    averageValue: number;
    nowValue: number;
    generalValue: number;
    moodValue: number;
    walkingValue: number;
    normalValue: number;
    relationValue: number;
    sleepValue: number;
    lifeValue: number;
  }) => (
    <Layout>
      <View style={styles.section}>
        <Text style={styles.heading}>Brief Pain Inventory</Text>
        <Text style={styles.heading}>
          Completed on:
          {getCurrentTime()}
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          1. Please rate your pain by selecting the score that best describe
          your pain at its worst in the past 24 hours.
        </Text>
        <Text style={styles.body}>
          {worstValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          2. Please rate your pain by selecting the score that best describes
          your pain at its least (best) in the last 24 hours.
        </Text>
        <Text style={styles.body}>
          {bestValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          3. Please rate your pain by selecting the score that best describes
          your pain on average.
        </Text>
        <Text style={styles.body}>
          {averageValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          4. Please rate your pain by selecting the score that describes how
          much pain you have right now.
        </Text>
        <Text style={styles.body}>
          {nowValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          5. Select the result that best describes how, during the past 24
          hours, pain has interfered with your life.
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>A. General Activity:</Text>
        <Text style={styles.body}>
          {generalValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>B. Mood:</Text>
        <Text style={styles.body}>
          {moodValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>C. Walking Ability</Text>
        <Text style={styles.body}>
          {walkingValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          D. Normal Work (includes both work outside the home and housework
        </Text>
        <Text style={styles.body}>
          {normalValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>E. Relations with Other People</Text>
        <Text style={styles.body}>
          {relationValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection} wrap={false}>
        <Text style={styles.body} wrap={false}>
          F. Sleep
        </Text>
        <Text style={styles.body}>
          {sleepValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>G. Enjoyment of Life:</Text>
        <Text style={styles.body}>
          {lifeValue}
          /10
        </Text>
      </View>
    </Layout>
  ),
);
