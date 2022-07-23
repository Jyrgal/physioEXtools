import { useEffect, useState } from "react";
import { Assessment } from "types/assessment";
import { Text } from "components/text";

export function Summary({
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
      return <Text value={`Score: ${score}`} />;
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
    case "P4 Instrument": {
      const morningScore: number = valuesMap.get(0) || 0;
      const afternoonScore: number = valuesMap.get(1) || 0;
      const eveningScore: number = valuesMap.get(2) || 0;
      const withActivityScore: number = valuesMap.get(3) || 0;
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
        <div className="flex flex-col">
          <Text value="Results" />
          <Text value={`Score: ${score}`} />
          <Text
            value={
              score < 4
                ? "This score does not suggests the presence of Neuropathic pain"
                : "This score suggests the presence of Neuropathic pain"
            }
          />
        </div>
      );
    }
    default:
      return <div />;
  }
}
