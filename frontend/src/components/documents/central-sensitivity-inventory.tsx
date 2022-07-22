import { memo } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getCurrentTime, convertTabValuesToInteger } from "utils";
import { Layout } from "components/documents/layout";

const styles = StyleSheet.create({
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const CentralSensitivityInventoryDocument = memo(
  ({
    morningValue,
    musclesValue,
    anxietyValue,
    grindValue,
    diarrhoeaValue,
    dailyValue,
    lightValue,
    activeValue,
    painValue,
    headacheValue,
    discomfortValue,
    sleepValue,
    concentrateValue,
    skinValue,
    stressValue,
    sadValue,
    energyValue,
    tensionValue,
    jawValue,
    smellValue,
    urinateValue,
    legsValue,
    rememberValue,
    traumaValue,
    pelvicValue,
  }: {
    morningValue: string;
    musclesValue: string;
    anxietyValue: string;
    grindValue: string;
    diarrhoeaValue: string;
    dailyValue: string;
    lightValue: string;
    activeValue: string;
    painValue: string;
    headacheValue: string;
    discomfortValue: string;
    sleepValue: string;
    concentrateValue: string;
    skinValue: string;
    stressValue: string;
    sadValue: string;
    energyValue: string;
    tensionValue: string;
    jawValue: string;
    smellValue: string;
    urinateValue: string;
    legsValue: string;
    rememberValue: string;
    traumaValue: string;
    pelvicValue: string;
  }) => (
    <Layout>
      <View style={styles.section}>
        <Text style={styles.heading}>Central Sensitivity Index</Text>
        <Text style={styles.heading}>
          Completed on:
          {getCurrentTime()}
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          1. I feel unrefreshed when I wake up in the morning
        </Text>
        <Text style={styles.body}>
          {morningValue} ({convertTabValuesToInteger(morningValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>2. My muscles feel stiff and achy</Text>
        <Text style={styles.body}>
          {musclesValue} ({convertTabValuesToInteger(musclesValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>3. I have anxiety attacks</Text>
        <Text style={styles.body}>
          {anxietyValue} ({convertTabValuesToInteger(anxietyValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>4. I grind or clench my teeth</Text>
        <Text style={styles.body}>
          {grindValue} ({convertTabValuesToInteger(grindValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          5. I have problems with diarrhoea and/or constipation
        </Text>
        <Text style={styles.body}>
          {diarrhoeaValue} ({convertTabValuesToInteger(diarrhoeaValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          6. I need help in performing my daily activities
        </Text>
        <Text style={styles.body}>
          {dailyValue} ({convertTabValuesToInteger(dailyValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>7. I am sensitive to bright lights</Text>
        <Text style={styles.body}>
          {lightValue} ({convertTabValuesToInteger(lightValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          8. I get tired very easily when I am physically active
        </Text>
        <Text style={styles.body}>
          {activeValue} ({convertTabValuesToInteger(activeValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>9. I feel pain all over my body</Text>
        <Text style={styles.body}>
          {painValue} ({convertTabValuesToInteger(painValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>10. I have headaches</Text>
        <Text style={styles.body}>
          {headacheValue} ({convertTabValuesToInteger(headacheValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          11. I feel discomfort in my bladder and/or burning when I urinate
        </Text>
        <Text style={styles.body}>
          {discomfortValue} ({convertTabValuesToInteger(discomfortValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>12. I do not sleep well</Text>
        <Text style={styles.body}>
          {sleepValue} ({convertTabValuesToInteger(sleepValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>13. I have difficulty concentrating</Text>
        <Text style={styles.body}>
          {concentrateValue} ({convertTabValuesToInteger(concentrateValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          14. I have skin problems such as dryness, itchiness or rashes
        </Text>
        <Text style={styles.body}>
          {skinValue} ({convertTabValuesToInteger(skinValue)})
        </Text>
      </View>
      <View style={styles.bodySection} wrap={false}>
        <Text style={styles.body} wrap={false}>
          15. Stress makes my physical symptoms get worse
        </Text>
        <Text style={styles.body}>
          {stressValue} ({convertTabValuesToInteger(stressValue)})
        </Text>
      </View>
      <View style={styles.bodySection} wrap={false}>
        <Text style={styles.body} wrap={false}>
          16. I feel sad or depressed
        </Text>
        <Text style={styles.body}>
          {sadValue} ({convertTabValuesToInteger(sadValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>17. I have low energy</Text>
        <Text style={styles.body}>
          {energyValue} ({convertTabValuesToInteger(energyValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          18. I have muscle tension in my neck and shoulders
        </Text>
        <Text style={styles.body}>
          {tensionValue} ({convertTabValuesToInteger(tensionValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>19. I have pain in my jaw</Text>
        <Text style={styles.body}>
          {jawValue} ({convertTabValuesToInteger(jawValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          20. Certain smells, such as perfumes, make me feel dizzy and nauseated
        </Text>
        <Text style={styles.body}>
          {smellValue} ({convertTabValuesToInteger(smellValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>21. I have to urinate frequently</Text>
        <Text style={styles.body}>
          {urinateValue} ({convertTabValuesToInteger(urinateValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          22. My legs feel uncomfortable and restless when I am trying to go to
          sleep at night
        </Text>
        <Text style={styles.body}>
          {legsValue} ({convertTabValuesToInteger(legsValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>
          23. I have difficulty remembering things
        </Text>
        <Text style={styles.body}>
          {rememberValue} ({convertTabValuesToInteger(rememberValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>24. I suffered trauma as a child</Text>
        <Text style={styles.body}>
          {traumaValue} ({convertTabValuesToInteger(traumaValue)})
        </Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={styles.body}>25. I have pain in my pelvic area</Text>
        <Text style={styles.body}>
          {pelvicValue} ({convertTabValuesToInteger(pelvicValue)})
        </Text>
      </View>
    </Layout>
  )
);
