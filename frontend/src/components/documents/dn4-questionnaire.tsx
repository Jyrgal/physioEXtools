import { memo } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const DN4QuestionnaireDocument = memo(
  ({
    burning,
    cold,
    shocks,
    tingling,
    pins,
    numb,
    itching,
    touch,
    prick,
    brush,
  }: {
    burning: boolean;
    cold: boolean;
    shocks: boolean;
    tingling: boolean;
    pins: boolean;
    numb: boolean;
    itching: boolean;
    touch: boolean;
    prick: boolean;
    brush: boolean;
  }) => (
    <Layout>
      <View style={styles.section}>
        <Text style={styles.heading}>DN4 Questionnnaire</Text>
        <Text style={styles.heading}>
          Completed on:
          {getCurrentTime()}
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>1. Burning?</Text>
        <Text style={styles.body}>{burning ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>2. Painful cold?</Text>
        <Text style={styles.body}>{cold ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>3. Electric shocks?</Text>
        <Text style={styles.body}>{shocks ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>4. Tingling?</Text>
        <Text style={styles.body}>{tingling ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>5. Pins and needles?</Text>
        <Text style={styles.body}>{pins ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>6. Numbness?</Text>
        <Text style={styles.body}>{numb ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>7. Itching?</Text>
        <Text style={styles.body}>{itching ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>8. Hypoesthesia to touch</Text>
        <Text style={styles.body}>{touch ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>9. Hypoesthesia to prick</Text>
        <Text style={styles.body}>{prick ? 'Yes' : 'No'}</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>10. Brushing</Text>
        <Text style={styles.body}>{brush ? 'Yes' : 'No'}</Text>
      </View>
    </Layout>
  ),
);
