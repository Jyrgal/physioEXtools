import { Assessment } from "types/assessment";
import { Text } from "components/text";

export function Summary({
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
      return <Text value={`Score: ${score}`} />;
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
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Pain: ${briefPainInventoryPainScore}`} />
          <Text
            value={`Physical Interference: ${briefPainInventoryPhysicalInterferenceScore}`}
          />
          <Text
            value={`Affective Interference: ${briefPainInventoryAffectiveInterferenceScore}`}
          />
          <Text
            value={`Sleep Interference: ${briefPainInventorySleepInterferenceScore}`}
          />
        </div>
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
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Average Score: ${averageScore}`} />
          <Text value={`Morning Score: ${morningScore}`} />
          <Text value={`Afternoon Score: ${afternoonScore}`} />
          <Text value={`Evening Score: ${eveningScore}`} />
          <Text value={`With Activity Score: ${withActivityScore}`} />
        </div>
      );
    }
    case "DN4Q": {
      const DN4QScore: number =
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
      let final = "";
      if (DN4QScore <= 1) {
        final = "Peripheral Neuropathic contribution: very low";
      } else if (DN4QScore === 2) {
        final = "Peripheral Neuropathic contribution: low";
      } else if (DN4QScore === 3) {
        final = "Peripheral Neuropathic contribution: moderate";
      } else if (DN4QScore >= 4 && DN4QScore < 6) {
        final = "Peripheral Neuropathic contribution: high";
      } else if (DN4QScore >= 6) {
        final = "Peripheral Neuropathic contribution: very high";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Score: ${DN4QScore}`} />
          <Text
            value={
              DN4QScore < 4
                ? "Interpretation: This score does not suggests the presence of Neuropathic pain"
                : "Interpretation: This score suggests the presence of Neuropathic pain"
            }
          />
          <Text value={final} />
        </div>
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
        <Text
          value={`Score: ${percentHealthRelatedSatisfaction.toFixed(2)} %`}
        />
      );
    }
    case "SLANSS": {
      const score1: number = values?.get("SLANSS-1") || 0;
      const score2: number = values?.get("SLANSS-2") || 0;
      const score3: number = values?.get("SLANSS-3") || 0;
      const score4: number = values?.get("SLANSS-4") || 0;
      const score5: number = values?.get("SLANSS-5") || 0;
      const score6: number = values?.get("SLANSS-6") || 0;
      const score7: number = values?.get("SLANSS-7") || 0;
      const SLANSSTotalScore: number =
        (score1 * 5 || 0) +
        (score2 * 5 || 0) +
        (score3 * 3 || 0) +
        (score4 * 2 || 0) +
        (score5 * 1 || 0) +
        (score6 * 5 || 0) +
        (score7 * 3 || 0);
      let final = "";
      if (SLANSSTotalScore < 3) {
        final = "Peripheral Neuropathic contribution: very low";
      } else if (SLANSSTotalScore >= 3 && SLANSSTotalScore < 6) {
        final = "Peripheral Neuropathic contribution: low";
      } else if (SLANSSTotalScore >= 6 && SLANSSTotalScore < 12) {
        final = "Peripheral Neuropathic contribution: moderate";
      } else if (SLANSSTotalScore >= 12 && SLANSSTotalScore < 14) {
        final = "Peripheral Neuropathic contribution: high";
      } else if (SLANSSTotalScore >= 14) {
        final = "Peripheral Neuropathic contribution: very high";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Score: ${SLANSSTotalScore}`} />
          <Text
            value={
              SLANSSTotalScore < 12
                ? "Interpretation: This score does not suggests the presence of Neuropathic pain"
                : "Interpretation: This score suggests the presence of Neuropathic pain"
            }
          />
          <Text value={final} />
        </div>
      );
    }
    case "CSI": {
      const CSITotalScore: number =
        (values?.get("CSI-1") || 0) +
        (values?.get("CSI-2") || 0) +
        (values?.get("CSI-3") || 0) +
        (values?.get("CSI-4") || 0) +
        (values?.get("CSI-5") || 0) +
        (values?.get("CSI-6") || 0) +
        (values?.get("CSI-7") || 0) +
        (values?.get("CSI-8") || 0) +
        (values?.get("CSI-9") || 0) +
        (values?.get("CSI-10") || 0) +
        (values?.get("CSI-11") || 0) +
        (values?.get("CSI-12") || 0) +
        (values?.get("CSI-13") || 0) +
        (values?.get("CSI-14") || 0) +
        (values?.get("CSI-15") || 0) +
        (values?.get("CSI-16") || 0) +
        (values?.get("CSI-17") || 0) +
        (values?.get("CSI-18") || 0) +
        (values?.get("CSI-19") || 0) +
        (values?.get("CSI-20") || 0) +
        (values?.get("CSI-21") || 0) +
        (values?.get("CSI-22") || 0) +
        (values?.get("CSI-23") || 0) +
        (values?.get("CSI-24") || 0) +
        (values?.get("CSI-25") || 0);
      const CSIPhysicalScore: number =
        (values?.get("CSI-2") || 0) +
        (values?.get("CSI-6") || 0) +
        (values?.get("CSI-8") || 0) +
        (values?.get("CSI-9") || 0) +
        (values?.get("CSI-12") || 0) +
        (values?.get("CSI-17") || 0) +
        (values?.get("CSI-22") || 0) +
        (values?.get("CSI-25") || 0);
      const CSIEmotionScore: number =
        (values?.get("CSI-3") || 0) +
        (values?.get("CSI-13") || 0) +
        (values?.get("CSI-15") || 0) +
        (values?.get("CSI-16") || 0) +
        (values?.get("CSI-17") || 0) +
        (values?.get("CSI-23") || 0) +
        (values?.get("CSI-24") || 0);
      const CSIHeadacheScore: number =
        (values?.get("CSI-4") || 0) +
        (values?.get("CSI-7") || 0) +
        (values?.get("CSI-10") || 0) +
        (values?.get("CSI-19") || 0) +
        (values?.get("CSI-20") || 0);
      const CSIUrologicalScore: number =
        (values?.get("CSI-10") || 0) +
        (values?.get("CSI-21") || 0) +
        (values?.get("CSI-25") || 0);

      let final = "";
      if (CSITotalScore < 20) {
        final = "Central Nociplastic contribution: very low";
      } else if (CSITotalScore >= 20 && CSITotalScore < 30) {
        final = "Central Nociplastic contribution: low";
      } else if (CSITotalScore >= 30 && CSITotalScore <= 40) {
        final = "Central Nociplastic contribution: moderate";
      } else if (CSITotalScore > 40 && CSITotalScore < 50) {
        final = "Central Nociplastic contribution: high";
      } else if (CSITotalScore >= 50) {
        final = "Central Nociplastic contribution: very high";
      }

      // check if the 25 is right (also need a reference for these subscores)
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${CSITotalScore}`} />
          <Text value={`Physical Score: ${CSIPhysicalScore}`} />
          <Text value={`Physical Score: ${CSIEmotionScore}`} />
          <Text value={`Physical Score: ${CSIHeadacheScore}`} />
          <Text value={`Physical Score: ${CSIUrologicalScore}`} />
          <Text
            value={
              CSITotalScore < 40
                ? "Interpretation: This score does not suggests the presence of central nociplasty (sensitisation)"
                : "Interpretation: This score suggests the presence of central nociplasty (sensitisation)"
            }
          />
          <Text value={final} />
        </div>
      );
    }
    case "PCS": {
      const PCSScore: number =
        (values?.get("PCS-1") || 0) +
        (values?.get("PCS-2") || 0) +
        (values?.get("PCS-3") || 0) +
        (values?.get("PCS-4") || 0) +
        (values?.get("PCS-5") || 0) +
        (values?.get("PCS-6") || 0) +
        (values?.get("PCS-7") || 0) +
        (values?.get("PCS-8") || 0) +
        (values?.get("PCS-9") || 0) +
        (values?.get("PCS-10") || 0) +
        (values?.get("PCS-11") || 0) +
        (values?.get("PCS-12") || 0) +
        (values?.get("PCS-13") || 0);
      let final1 = "";
      if (PCSScore <= 20) {
        final1 =
          "Interpretation: This score does not suggests clinically relevant pain catastrophizing";
      } else if (PCSScore > 20) {
        final1 =
          "Interpretation: This score suggests clinically relevant pain catastrophizing";
      } else if (PCSScore > 30) {
        final1 =
          "Interpretation: This score is strongly indicative of clinically relevant pain catastrophizing";
      }
      let final2 = "";
      if (PCSScore < 10) {
        final2 = "Cognitive/Belief contribution: very low";
      } else if (PCSScore >= 10 && PCSScore <= 20) {
        final2 = "Cognitive/Belief contribution: low";
      } else if (PCSScore > 20 && PCSScore <= 30) {
        final2 = "Cognitive/Belief contribution: moderate";
      } else if (PCSScore > 30 && PCSScore < 35) {
        final2 = "Cognitive/Belief contribution: high";
      } else if (PCSScore >= 35) {
        final2 = "Cognitive/Belief contribution: very high";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${PCSScore}`} />
          <Text value={final1} />
          <Text value={final2} />
        </div>
      );
    }
    case "TSK": {
      const TSKScore: number =
        (values?.get("TSK-1") || 0) +
        (values?.get("TSK-2") || 0) +
        (values?.get("TSK-3") || 0) +
        (values?.get("TSK-4") || 0) +
        (values?.get("TSK-5") || 0) +
        (values?.get("TSK-6") || 0) +
        (values?.get("TSK-7") || 0) +
        (values?.get("TSK-8") || 0) +
        (values?.get("TSK-9") || 0) +
        (values?.get("TSK-10") || 0) +
        (values?.get("TSK-11") || 0);
      let final1 = "";
      if (TSKScore < 20) {
        final1 =
          "Interpretation: This score does not suggests clinically relevant aversion to movement/exercise*";
      } else if (TSKScore > 20) {
        final1 =
          "Interpretation: This score suggests clinically relevant aversion to movement/exercise*";
      } else if (TSKScore > 30) {
        final1 =
          "Interpretation: This score is strongly indicative of clinically relevant aversion to movement/exercise*";
      }
      let final2 = "";
      if (TSKScore <= 13) {
        final2 = "Cognitive/Belief contribution: very low";
      } else if (TSKScore > 13 && TSKScore <= 20) {
        final2 = "Cognitive/Belief contribution: low";
      } else if (TSKScore > 20 && TSKScore <= 25) {
        final2 = "Cognitive/Belief contribution: moderate";
      } else if (TSKScore > 25 && TSKScore <= 30) {
        final2 = "Cognitive/Belief contribution: high";
      } else if (TSKScore > 30) {
        final2 = "Cognitive/Belief contribution: very high";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${TSKScore}`} />
          <Text value={final1} />
          <Text value="Minimum clinically important difference: 4 points" />
          <Text value="*This interpretation is not empirically supported" />
          <Text value={final2} />
        </div>
      );
    }
    case "PSEQ": {
      const PSEQScore: number =
        (values?.get("PSEQ-1") || 0) +
        (values?.get("PSEQ-2") || 0) +
        (values?.get("PSEQ-3") || 0) +
        (values?.get("PSEQ-4") || 0) +
        (values?.get("PSEQ-5") || 0) +
        (values?.get("PSEQ-6") || 0) +
        (values?.get("PSEQ-7") || 0) +
        (values?.get("PSEQ-8") || 0) +
        (values?.get("PSEQ-9") || 0) +
        (values?.get("PSEQ-10") || 0);
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${PSEQScore} / 60`} />
          <Text value="Minimum detectable change: 9 points" />
        </div>
        // unaware of cut off values
      );
    }
    case "TIDS": {
      const TIDSScore: number =
        (values?.get("TIDS-1") || 0) +
        (values?.get("TIDS-2") || 0) +
        (values?.get("TIDS-3") || 0) +
        (values?.get("TIDS-4") || 0) +
        (values?.get("TIDS-5") || 0) +
        (values?.get("TIDS-6") || 0) +
        (values?.get("TIDS-7") || 0) +
        (values?.get("TIDS-8") || 0) +
        (values?.get("TIDS-9") || 0) +
        (values?.get("TIDS-10") || 0) +
        (values?.get("TIDS-11") || 0) +
        (values?.get("TIDS-12") || 0);
      const TIDSNegativeAffectScore: number =
        (values?.get("TIDS-1") || 0) +
        (values?.get("TIDS-7") || 0) +
        (values?.get("TIDS-9") || 0) +
        (values?.get("TIDS-10") || 0) +
        (values?.get("TIDS-11") || 0) +
        (values?.get("TIDS-12") || 0);
      const TIDSPainScore: number =
        (values?.get("TIDS-2") || 0) +
        (values?.get("TIDS-3") || 0) +
        (values?.get("TIDS-6") || 0) +
        (values?.get("TIDS-8") || 0);
      const TIDSHyperarousalScore: number =
        (values?.get("TIDS-4") || 0) + (values?.get("TIDS-5") || 0);
      let final1 = "";
      if (TIDSScore <= 5) {
        final1 = "An 82.4% positive predictive value for full recovery";
      } else if (TIDSScore >= 12) {
        final1 = "An 87.5% positive predictive value for little or no recovery";
      } else if (TIDSScore > 30 && TIDSScore < 12) {
        final1 = "Neither predicts full recovery nor little/no recovery";
      }
      let final2 = "";
      if (TIDSNegativeAffectScore < 2) {
        final2 = "Good prognosis for disability, pain and affective outcomes";
      } else if (TIDSNegativeAffectScore > 5 && TIDSNegativeAffectScore <= 6) {
        final2 = "Poor prognosis for disability and pain outcomes";
      } else if (TIDSNegativeAffectScore < 5 && TIDSNegativeAffectScore <= 2) {
        final2 = "Good prognosis for affective outcomes";
      } else if (TIDSNegativeAffectScore === 5) {
        final2 = "Neither good nor bad prognosis in any domain";
      } else if (TIDSNegativeAffectScore > 6) {
        final2 = "Poor prognosis for disability, pain and affective outcomes";
      }
      let final3 = "";
      if (TIDSPainScore < 2) {
        final3 = "Good prognosis for disability and pain outcomes";
      } else if (TIDSPainScore <= 4 && TIDSPainScore >= 2) {
        final3 = "Neither good nor bad prognosis in any domain";
      } else if (TIDSPainScore > 4) {
        final3 = "Poor prognosis for disability and pain outcomes";
      }
      let final4 = "";
      if (TIDSHyperarousalScore < 2) {
        final4 = "Good prognosis for affective outcomes";
      } else if (TIDSHyperarousalScore < 4 && TIDSHyperarousalScore >= 2) {
        final4 = "Neither good nor bad prognosis in any domain";
      } else if (TIDSHyperarousalScore === 4) {
        final4 = "Poor prognosis for affective outcomes";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text
            value={`Total Score: ${TIDSScore}, This total score suggests:`}
          />
          <Text value={final1} />
          <Text
            value={`Negative Affect Subscore: ${TIDSNegativeAffectScore}, This subscore suggests:`}
          />
          <Text value={final2} />
          <Text
            value={`Uncontrolled Pain Subscore: ${TIDSNegativeAffectScore}, This subscore suggests:`}
          />
          <Text value={final3} />
          <Text
            value={`Intrusion / Hyperarousal Subscore: ${TIDSHyperarousalScore}, This subscore suggests:`}
          />
          <Text value={final4} />
        </div>
      );
    }
    case "PHQ-9": {
      const PHQ9Score: number =
        (values?.get("PHQ-9-1") || 0) +
        (values?.get("PHQ-9-2") || 0) +
        (values?.get("PHQ-9-3") || 0) +
        (values?.get("PHQ-9-4") || 0) +
        (values?.get("PHQ-9-5") || 0) +
        (values?.get("PHQ-9-6") || 0) +
        (values?.get("PHQ-9-7") || 0) +
        (values?.get("PHQ-9-8") || 0) +
        (values?.get("PHQ-9-9") || 0);
      // create some array and count number of answers >= 2 and add to the major
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text
            value={`Total Score: ${PHQ9Score}, This total score suggests:`}
          />
          <Text
            value={
              values?.get("PHQ-9-1") > 1 || values?.get("PHQ-9-2") > 1
                ? "A major depressive disorder"
                : "Does not suggest the presence of a major depressive disorder"
            }
          />
          <Text
            value={
              values?.get("PHQ-9-9") > 1
                ? "NOTE: The response to item 9 requires special consideration and FOLLOW UP"
                : ""
            }
          />
        </div>
      );
    }
    case "HADS": {
      const score1 = values?.get("HADS-1") || 0;
      const score2 = values?.get("HADS-2") || 0;
      const score3 = values?.get("HADS-3") || 0;
      const score4 = values?.get("HADS-4") || 0;
      const score5 = values?.get("HADS-5") || 0;
      const score6 = values?.get("HADS-6") || 0;
      const score7 = values?.get("HADS-7") || 0;
      const score8 = values?.get("HADS-8") || 0;
      const score9 = values?.get("HADS-9") || 0;
      const score10 = values?.get("HADS-10") || 0;
      const score11 = values?.get("HADS-11") || 0;
      const score12 = values?.get("HADS-12") || 0;
      const score13 = values?.get("HADS-13") || 0;
      const score14 = values?.get("HADS-14") || 0;
      const HADSTotalScore: number =
        4 -
        score1 +
        score2 +
        (4 - score3) +
        score4 +
        (4 - score5) +
        (4 - score6) +
        score7 +
        (4 - score8) +
        score9 +
        (4 - score10) +
        (4 - score11) +
        score12 +
        (4 - score13) +
        score14;
      const HADSAnxietySubscore: number =
        4 -
        score1 +
        (4 - score3) +
        (4 - score5) +
        score7 +
        score9 +
        (4 - score11) +
        (4 - score13);
      const HADSDepressionSubscore: number =
        score2 +
        score4 +
        (4 - score6) +
        (4 - score8) +
        (4 - score10) +
        score12 +
        score14;
      let final1 = "";
      if (HADSAnxietySubscore <= 6) {
        final1 = "Within normal responses";
      } else if (HADSAnxietySubscore > 6 && HADSAnxietySubscore <= 10) {
        final1 = "Mild anxiety";
      } else if (HADSAnxietySubscore > 10 && HADSAnxietySubscore <= 14) {
        final1 = "Moderate anxiety";
      } else if (HADSAnxietySubscore > 14) {
        final1 = "Severe anxiety";
      }
      let final2 = "";
      if (HADSDepressionSubscore <= 7) {
        final2 = "Within normal responses";
      } else if (HADSDepressionSubscore > 7 && HADSDepressionSubscore <= 10) {
        final2 = "Mild anxiety";
      } else if (HADSDepressionSubscore > 10 && HADSDepressionSubscore <= 14) {
        final2 = "Moderate anxiety";
      } else if (HADSDepressionSubscore > 14) {
        final2 = "Severe anxiety";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${HADSTotalScore}`} />
          <Text
            value={`Anxiety Subscale: ${HADSAnxietySubscore}, this score suggests`}
          />
          <Text value={final1} />
          <Text
            value={`Depression Subscale: ${HADSDepressionSubscore}, this score suggests`}
          />
          <Text value={final2} />
        </div>
      );
    }
    case "PTSDC-CV": {
      const score1 = values?.get("PTSDC-CV-1") || 0;
      const score2 = values?.get("PTSDC-CV-2") || 0;
      const score3 = values?.get("PTSDC-CV-3") || 0;
      const score4 = values?.get("PTSDC-CV-4") || 0;
      const score5 = values?.get("PTSDC-CV-5") || 0;
      const score6 = values?.get("PTSDC-CV-6") || 0;
      const score7 = values?.get("PTSDC-CV-7") || 0;
      const score8 = values?.get("PTSDC-CV-8") || 0;
      const score9 = values?.get("PTSDC-CV-9") || 0;
      const score10 = values?.get("PTSDC-CV-10") || 0;
      const score11 = values?.get("PTSDC-CV-11") || 0;
      const score12 = values?.get("PTSDC-CV-12") || 0;
      const score13 = values?.get("PTSDC-CV-13") || 0;
      const score14 = values?.get("PTSDC-CV-14") || 0;
      const score15 = values?.get("PTSDC-CV-15") || 0;
      const score16 = values?.get("PTSDC-CV-16") || 0;
      const score17 = values?.get("PTSDC-CV-17") || 0;
      const PTSDCCCScore: number =
        1 +
        score1 +
        (1 + score2) +
        (1 + score3) +
        (1 + score4) +
        (1 + score5) +
        (1 + score6) +
        (1 + score7) +
        (1 + score8) +
        (1 + score9) +
        (1 + score10) +
        (1 + score11) +
        (1 + score12) +
        (1 + score13) +
        (1 + score14) +
        (1 + score15) +
        (1 + score16) +
        (1 + score17);
      // create some array and count number of answers >= 3 for 1-5, 6-12 and 13-17, and add to the logic

      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${PTSDCCCScore}`} />
          <Text
            value={
              PTSDCCCScore >= 44
                ? "Interpretation 1: this score suggests the presence of PTSD"
                : "Interpretation 1: this score suggests a decreased likelihood of PTSD"
            }
          />
        </div>
        // add logic for DSM-IV criteria
      );
    }
    case "FABQ": {
      const FABQScore: number =
        (values?.get("FABQ-1") || 0) +
        (values?.get("FABQ-2") || 0) +
        (values?.get("FABQ-3") || 0) +
        (values?.get("FABQ-4") || 0) +
        (values?.get("FABQ-5") || 0) +
        (values?.get("FABQ-6") || 0) +
        (values?.get("FABQ-7") || 0) +
        (values?.get("FABQ-8") || 0) +
        (values?.get("FABQ-9") || 0) +
        (values?.get("FABQ-10") || 0) +
        (values?.get("FABQ-11") || 0) +
        (values?.get("FABQ-12") || 0) +
        (values?.get("FABQ-13") || 0) +
        (values?.get("FABQ-14") || 0) +
        (values?.get("FABQ-15") || 0) +
        (values?.get("FABQ-16") || 0);
      const FABQWorkScore: number =
        (values?.get("FABQ-6") || 0) +
        (values?.get("FABQ-7") || 0) +
        (values?.get("FABQ-9") || 0) +
        (values?.get("FABQ-10") || 0) +
        (values?.get("FABQ-11") || 0) +
        (values?.get("FABQ-12") || 0) +
        (values?.get("FABQ-15") || 0);
      const FABQPhysicalScore: number =
        (values?.get("FABQ-2") || 0) +
        (values?.get("FABQ-3") || 0) +
        (values?.get("FABQ-4") || 0) +
        (values?.get("FABQ-5") || 0);

      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Total Score: ${FABQScore}`} />
          <Text value={`Work Score: ${FABQWorkScore}`} />
          <Text value={`Physical Activity Score: ${FABQPhysicalScore}`} />
        </div>
      );
    }
    case "DASS": {
      const DASSScore: number =
        (values?.get("DASS-1") || 0) +
        (values?.get("DASS-2") || 0) +
        (values?.get("DASS-3") || 0) +
        (values?.get("DASS-4") || 0) +
        (values?.get("DASS-5") || 0) +
        (values?.get("DASS-6") || 0) +
        (values?.get("DASS-7") || 0) +
        (values?.get("DASS-8") || 0) +
        (values?.get("DASS-9") || 0) +
        (values?.get("DASS-10") || 0) +
        (values?.get("DASS-11") || 0) +
        (values?.get("DASS-12") || 0) +
        (values?.get("DASS-13") || 0) +
        (values?.get("DASS-14") || 0) +
        (values?.get("DASS-15") || 0) +
        (values?.get("DASS-16") || 0);
      // depression score 3,5,10,13,16,17,21
      const DASSDepressionScore: number =
        (values?.get("DASS-3") || 0) +
        (values?.get("DASS-5") || 0) +
        (values?.get("DASS-10") || 0) +
        (values?.get("DASS-13") || 0) +
        (values?.get("DASS-16") || 0) +
        (values?.get("DASS-17") || 0) +
        (values?.get("DASS-21") || 0);
      // anxiety score 2,4,7,9,15,19,20
      const DASSAnxietyScore: number =
        (values?.get("DASS-2") || 0) +
        (values?.get("DASS-4") || 0) +
        (values?.get("DASS-7") || 0) +
        (values?.get("DASS-9") || 0) +
        (values?.get("DASS-15") || 0) +
        (values?.get("DASS-19") || 0) +
        (values?.get("DASS-20") || 0);
      // stress score 1,6,8,11,12,14,18
      const DASSStressScore: number =
        (values?.get("DASS-1") || 0) +
        (values?.get("DASS-6") || 0) +
        (values?.get("DASS-8") || 0) +
        (values?.get("DASS-11") || 0) +
        (values?.get("DASS-12") || 0) +
        (values?.get("DASS-14") || 0) +
        (values?.get("DASS-18") || 0);
      let final1 = "";
      if (DASSDepressionScore <= 4) {
        final1 = "(Normal)";
      } else if (DASSDepressionScore >= 5 && DASSDepressionScore <= 6) {
        final1 = "(Mild)";
      } else if (DASSDepressionScore >= 7 && DASSDepressionScore <= 10) {
        final1 = "(Moderate)";
      } else if (DASSDepressionScore >= 11 && DASSDepressionScore <= 13) {
        final1 = "(Severe)";
      } else {
        final1 = "(Extremely Severe)";
      }
      let final2 = "";
      if (DASSAnxietyScore <= 3) {
        final2 = "(Normal)";
      } else if (DASSAnxietyScore >= 4 && DASSAnxietyScore <= 5) {
        final2 = "(Mild)";
      } else if (DASSAnxietyScore >= 6 && DASSAnxietyScore <= 7) {
        final2 = "(Moderate)";
      } else if (DASSAnxietyScore >= 8 && DASSAnxietyScore <= 9) {
        final2 = "(Severe)";
      } else {
        final2 = "(Extremely Severe)";
      }
      let final3 = "";
      if (DASSStressScore <= 7) {
        final3 = "(Normal)";
      } else if (DASSStressScore >= 8 && DASSStressScore <= 9) {
        final3 = "(Mild)";
      } else if (DASSStressScore >= 10 && DASSStressScore <= 12) {
        final3 = "(Moderate)";
      } else if (DASSStressScore >= 13 && DASSStressScore <= 16) {
        final3 = "(Severe)";
      } else {
        final3 = "(Extremely Severe)";
      }
      return (
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Score: ${DASSScore}`} />
          <Text value={`Depression Score: ${DASSDepressionScore}`} />
          <Text value={final1} />
          <Text value={`Anxiety Score: ${DASSAnxietyScore}`} />
          <Text value={final2} />
          <Text value={`Stress Score: ${DASSStressScore}`} />
          <Text value={final3} />
        </div>
      );
    }
    case "CH": {
      const CHScore: number = values?.get("CH-1") || 10;
      return (
        <div className="flex flex-col">
          <Text value={`Cold hypersensitivity score: ${CHScore}`} />
          <Text
            value={
              CHScore <= 12
                ? "This score does not suggest the presence of cold hyperalgesia"
                : "This score does suggests the presence of cold hyperalgesia"
            }
          />
        </div>
      );
    }
    case "CPMA": {
      const CPMAUnits: number = values?.get("CPMA-units") || 0;
      const CPMAScores: number[] = values?.get("CPMA-scores");
      const CPMAScore1: number = (CPMAScores && CPMAScores[0]) || 0;
      const CPMAScore2: number = (CPMAScores && CPMAScores[1]) || 0;

      let CPMAUnitString = "lbf";
      if (CPMAUnits === 0) {
        CPMAUnitString = "lbf";
      } else if (CPMAUnits === 1) {
        CPMAUnitString = "kgf";
      } else if (CPMAUnits === 2) {
        CPMAUnitString = "N";
      }
      return (
        <div className="flex flex-col">
          <Text value={`PPDT score 1: ${CPMAScore1} ${CPMAUnitString}`} />
          <Text value={`PPDT score 2: ${CPMAScore2} ${CPMAUnitString}`} />
          <Text
            value={
              1.1 * CPMAScore1 <= CPMAScore2
                ? "Normal response, suggestive of nociceptive pain without peripheral neuropathic contribution."
                : "Suggestive of wind-up related to peripheral neurpathic pain."
            }
          />
        </div>
      );
    }
    case "PPDT": {
      const PPDTGender: number = values?.get("PPDT-gender") || 0;
      const PPDTUnits: number = values?.get("PPDT-units") || 0;
      const PPDTScoreUT: number = values?.get("PPDT-UT") || 0;
      const PPDTScoreTA: number = values?.get("PPDT-TA") || 0;
      let PPDTScoreUTKG = 2.49;
      let PPDTScoreTAKG = 3.64;

      if (PPDTUnits === 0) {
        PPDTScoreUTKG = PPDTScoreUT / 2.205;
        PPDTScoreTAKG = PPDTScoreTA / 2.205;
      } else if (PPDTUnits === 1) {
        PPDTScoreUTKG = PPDTScoreUT;
        PPDTScoreTAKG = PPDTScoreTA;
      } else if (PPDTUnits === 2) {
        PPDTScoreUTKG = PPDTScoreUT / 9.807;
        PPDTScoreTAKG = PPDTScoreTA / 9.807;
      }

      let PPDTUnitString = "lbf";
      if (PPDTUnits === 0) {
        PPDTUnitString = "lbf";
      } else if (PPDTUnits === 1) {
        PPDTUnitString = "kgf";
      } else if (PPDTUnits === 2) {
        PPDTUnitString = "N";
      }

      let final = "";
      if (PPDTGender === 0 && PPDTScoreUTKG < 2.49 && PPDTScoreTAKG >= 3.64) {
        final = "Interpretation: suggestive of Nociceptive Pain";
      } else if (
        PPDTGender === 0 &&
        PPDTScoreUTKG < 2.49 &&
        PPDTScoreTAKG < 3.64
      ) {
        final = "Interpretation: suggestive of Central Nociplastic Pain";
      } else if (
        PPDTGender === 0 &&
        PPDTScoreUTKG >= 2.49 &&
        PPDTScoreTAKG >= 3.64
      ) {
        final =
          "Interpretation: normal findings for upper trap and tibialis anterior";
      } else if (
        PPDTGender === 1 &&
        PPDTScoreUTKG < 1.64 &&
        PPDTScoreTAKG >= 2.29
      ) {
        final = "Interpretation: suggestive of Nociceptive Pain";
      } else if (
        PPDTGender === 1 &&
        PPDTScoreUTKG < 1.64 &&
        PPDTScoreTAKG < 2.29
      ) {
        final = "Interpretation: suggestive of Central Nociplastic Pain";
      } else if (
        PPDTGender === 1 &&
        PPDTScoreUTKG >= 1.64 &&
        PPDTScoreTAKG >= 2.29
      ) {
        final =
          "Interpretation: normal findings for upper trap and tibialis anterior";
      } else {
        final =
          "Inconclusive results, please check if scores are entered correctly";
      }

      return (
        <div className="flex flex-col">
          <Text
            value={`PPDT upper trap score: ${PPDTScoreUT} ${PPDTUnitString}`}
          />
          <Text
            value={`PPDT tibialis anterior score: ${PPDTScoreTA} ${PPDTUnitString}`}
          />
          <Text value={final} />
        </div>
      );
    }
    default: {
      return <div />;
    }
  }
}
