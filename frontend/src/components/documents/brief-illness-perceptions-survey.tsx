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

export const BriefIllnessPerceptionsSurveyDocument = memo(
  ({
    affectValue,
    timeValue,
    controlValue,
    helpValue,
    numberValue,
    severityValue,
    concernValue,
    understandValue,
    injureValue,
    emotionalValue,
    factor1,
    factor2,
    factor3,
  }: {
    affectValue: number;
    timeValue: number;
    controlValue: number;
    helpValue: number;
    numberValue: number;
    severityValue: number;
    concernValue: number;
    understandValue: number;
    injureValue: number;
    emotionalValue: number;
    factor1: string;
    factor2: string;
    factor3: string;
  }) => (
    <Layout>
      <View style={styles.section}>
        <Text style={styles.heading}>
          Brief Illness Perception Questionnaire (BIPQ) Summary
        </Text>
        <Text style={styles.heading}>
          Completed on:
          {getCurrentTime()}
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          1. To what degree has your injury had a negative effect on your life?
        </Text>
        <Text style={styles.body}>
          {affectValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          2. How long do you think your sypmtoms will continue?
        </Text>
        <Text style={styles.body}>
          {timeValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          3. How much control do you feel you have over your symptoms?
        </Text>
        <Text style={styles.body}>
          {controlValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          4. How much do you think your treament will help your symptoms? This
          includes medication, physical therapy or other treatments.
        </Text>
        <Text style={styles.body}>
          {helpValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          5. Thinking of all the symptoms that have arisen as a result of your
          injury, are you experiencing.
        </Text>
        <Text style={styles.body}>
          {numberValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          6. How severe are the symptoms that you're experiencing as a result of
          your injury?
        </Text>
        <Text style={styles.body}>
          {severityValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          7. How concerned are you about your symptoms?
        </Text>
        <Text style={styles.body}>
          {concernValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          8. How well do you feel you understand your symptoms?
        </Text>
        <Text style={styles.body}>
          {understandValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          9. How easily do you feel it would be to injure yourself further?
        </Text>
        <Text style={styles.body}>
          {injureValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          10. How much has your injury affected you emotionally? (ie. do they
          make you angry, scared, upset or depressed?)
        </Text>
        <Text style={styles.body}>
          {emotionalValue}
          /10
        </Text>
      </View>
      <View style={styles.bodySection} wrap={false}>
        <Text style={styles.body} wrap={false}>
          List of three most important factors that you believe caused your
          illness:
        </Text>
        <Text style={styles.body}>
          1.
          {factor1}
        </Text>
        <Text style={styles.body}>
          2.
          {factor2}
        </Text>
        <Text style={styles.body}>
          3.
          {factor3}
        </Text>
      </View>
    </Layout>
  ),
);
