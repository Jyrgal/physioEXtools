import { Text } from "components/text";
import { memo, useEffect, useState } from "react";
import { Separator } from "components/separator";
import { AssessmentRange } from "components/assessment-range";
import { usePDF } from "@react-pdf/renderer";
import { Download } from "components/download";
import { P4InstrumentDocument } from "components/documents/p4-instrument";

export const P4Instrument = memo(() => {
  const [morningValue, setMorningValue] = useState(0);
  const [afternoonValue, setAfternoonValue] = useState(0);
  const [eveningValue, setEveningValue] = useState(0);
  const [activityValue, setActivityValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const [instance, updateInstance] = usePDF({
    document: (
      <P4InstrumentDocument
        morningValue={morningValue}
        afternoonValue={afternoonValue}
        eveningValue={eveningValue}
        activityValue={activityValue}
      />
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [
    morningValue,
    afternoonValue,
    eveningValue,
    activityValue,
    updateInstance,
  ]);

  return (
    <div className="flex flex-col">
      <Text value="When answering these questions, think only of the pain you are experiencing in relation to the problem for which you are having treament." />
      <Text value="Select a score for each of the 4 questions." />
      <AssessmentRange
        title="1. On average, how bad has your pain been in the morning over the past 2 days?"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => {
          setMorningValue(value);
        }}
      />
      <Separator />
      <AssessmentRange
        title="2. On average, how bad has your pain been in the afternoon over the past 2 days?"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => setAfternoonValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="3. On average, how bad has your pain been in the evening over the past 2 days?"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => setEveningValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="4. On average, how bad has your pain been with activity over the past 2 days?"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => setActivityValue(value)}
      />
      <Separator />
      <Download
        download="p4-instrument.pdf"
        onClick={() => {
          setLoading(true);
          setLoading(false);
        }}
        loading={loading}
        url={instance.url || ""}
      />
    </div>
  );
});
