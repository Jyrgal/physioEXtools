import { Text } from 'components/text';
import { memo, useEffect, useState } from 'react';
import { Separator } from 'components/separator';
import { AssessmentRange } from 'components/assessment-range';
import { usePDF } from '@react-pdf/renderer';
import { Download } from 'components/download';
import { BriefPainInventoryDocument } from 'components/documents/brief-pain-inventory';

export const BriefPainInventory = memo(() => {
  const [worstValue, setWorstValue] = useState(0);
  const [bestValue, setBestValue] = useState(0);
  const [averageValue, setAverageValue] = useState(0);
  const [nowValue, setNowValue] = useState(0);
  const [generalValue, setGeneralValue] = useState(0);
  const [moodValue, setMoodValue] = useState(0);
  const [walkingValue, setWalkingValue] = useState(0);
  const [normalValue, setNormalValue] = useState(0);
  const [relationValue, setRelationValue] = useState(0);
  const [sleepValue, setSleepValue] = useState(0);
  const [lifeValue, setLifeValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const [instance, updateInstance] = usePDF({
    document: (
      <BriefPainInventoryDocument
        worstValue={worstValue}
        bestValue={bestValue}
        averageValue={averageValue}
        nowValue={nowValue}
        generalValue={generalValue}
        moodValue={moodValue}
        walkingValue={walkingValue}
        normalValue={normalValue}
        relationValue={relationValue}
        sleepValue={sleepValue}
        lifeValue={lifeValue}
      />
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [
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
    updateInstance,
  ]);

  return (
    <div className="flex flex-col">
      <AssessmentRange
        title="1. Please rate your pain by selecting the score that best describe your pain at its worst in the past 24 hours:"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => {
          setWorstValue(value);
        }}
      />
      <Separator />
      <AssessmentRange
        title="2. Please rate your pain by selecting the score that best describes your pain at its least (best) in the last 24 hours:"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => setBestValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="3. Please rate your pain by selecting the score that best describes your pain on average:"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => setAverageValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="4. Please rate your pain by selecting the score that describes how much pain you have right now:"
        minText="No Pain"
        maxText="Extreme Pain"
        onChange={(value) => setNowValue(value)}
      />
      <Separator />
      <Text
        styles="font-semibold text-md"
        value="5. Select the result that best describes how, during the past 24 hours, pain has interfered with your life:"
      />
      <Separator />
      <AssessmentRange
        title="A. General Activity:"
        minText="Does Not Interfere"
        maxText="Completely Interferes"
        onChange={(value) => setGeneralValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="B. Mood:"
        minText="Does Not Interfere"
        maxText="Completely Interferes"
        onChange={(value) => setMoodValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="C. Walking Ability"
        minText="Don't understand at all"
        maxText="Understand very clearly"
        onChange={(value) => setWalkingValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="D. Normal Work (includes both work outside the home and housework"
        minText="Does Not Interfere"
        maxText="Completely Interferes"
        onChange={(value) => setNormalValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="E. Relations with Other People"
        minText="Does Not Interfere"
        maxText="Completely Interferes"
        onChange={(value) => setRelationValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="F. Sleep"
        minText="Does Not Interfere"
        maxText="Completely Interferes"
        onChange={(value) => setSleepValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="G. Enjoyment of Life"
        minText="Does Not Interfere"
        maxText="Completely Interferes"
        onChange={(value) => setLifeValue(value)}
      />
      <Separator />
      <Download
        download="brief-pain-inventory.pdf"
        onClick={() => {
          setLoading(true);
          setLoading(false);
        }}
        loading={loading}
        url={instance.url || ''}
      />
    </div>
  );
});
