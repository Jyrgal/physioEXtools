import { Text } from "components/text";
import { memo, useEffect, useState } from "react";
import { Separator } from "components/separator";
import { AssessmentRange } from "components/assessment-range";
import { TextInput } from "components/text-input";
import { usePDF } from "@react-pdf/renderer";
import { BriefIllnessPerceptionsSurveyDocument } from "components/documents/brief-illness-perceptions-survey";
import { Download } from "components/download";

export const BriefIllnessPerceptionsSurvey = memo(() => {
  const [affectValue, setAffectValue] = useState(0);
  const [timeValue, setTimeValue] = useState(0);
  const [controlValue, setControlValue] = useState(0);
  const [helpValue, setHelpValue] = useState(0);
  const [numberValue, setNumberValue] = useState(0);
  const [severityValue, setSeverityValue] = useState(0);
  const [concernValue, setConcernValue] = useState(0);
  const [understandValue, setUnderstandValue] = useState(0);
  const [injureValue, setInjureValue] = useState(0);
  const [emotionalValue, setEmotionalValue] = useState(0);
  const [factor1, setFactor1] = useState("");
  const [factor2, setFactor2] = useState("");
  const [factor3, setFactor3] = useState("");
  const [loading, setLoading] = useState(false);

  const [instance, updateInstance] = usePDF({
    document: (
      <BriefIllnessPerceptionsSurveyDocument
        affectValue={affectValue}
        timeValue={timeValue}
        controlValue={controlValue}
        helpValue={helpValue}
        numberValue={numberValue}
        severityValue={severityValue}
        concernValue={concernValue}
        understandValue={understandValue}
        injureValue={injureValue}
        emotionalValue={emotionalValue}
        factor1={factor1}
        factor2={factor2}
        factor3={factor3}
      />
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [
    affectValue,
    timeValue,
    controlValue,
    helpValue,
    numberValue,
    severityValue,
    concernValue,
    understandValue,
    emotionalValue,
    factor1,
    factor2,
    factor3,
    updateInstance,
  ]);

  return (
    <div className="flex flex-col">
      <Text value="We are interested in your beliefs about your injury. This includes pain or any other symptoms that you believe occurred or worsened as a result of your injury." />
      <Text value="Please answer the following questions by circling that BEST describes your beliefs about your symptoms:" />
      <Separator />
      <AssessmentRange
        title="1. To what degree has your injury had a negative effect on your life?:"
        minText="No affect at all"
        maxText="Severly affects my life"
        onChange={(value) => {
          setAffectValue(value);
        }}
      />
      <Separator />
      <AssessmentRange
        title="2. How long do you think your symptoms will continue?:"
        minText="A very short time"
        maxText="Forever"
        onChange={(value) => setTimeValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="3. How much control do you feel you have over your symptoms?:"
        minText="Absolutely no control"
        maxText="Complete control"
        onChange={(value) => setControlValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="4. How much do you think your treament will help your symptoms? This includes medication, physical therapy or other treatments:"
        minText="Not at all"
        maxText="Extremely helpful"
        onChange={(value) => setHelpValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="5. Thinking of all the symptoms that have arisen as a result of your injury, are you experiencing:"
        minText="No symptoms at all"
        maxText="Many different symptoms"
        onChange={(value) => setNumberValue(value)}
      />
      <Separator />
      <AssessmentRange
        title={
          "6. How severe are the symptoms that you're experiencing as a result of your injury?:"
        }
        minText="No symptoms at all"
        maxText="Extremely severe symptoms"
        onChange={(value) => setSeverityValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="7. How concerned are you about your symptoms?:"
        minText="Not concerned at all"
        maxText="Extremely concerned"
        onChange={(value) => setConcernValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="8. How well do you feel you understand your symptoms?:"
        minText={"Don't understand at all"}
        maxText="Understand very clearly"
        onChange={(value) => setUnderstandValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="9. How easily do you feel it would be to injure yourself further?:"
        minText="No more easily than normal"
        maxText="I could very easily by injured further"
        onChange={(value) => setInjureValue(value)}
      />
      <Separator />
      <AssessmentRange
        title="10. How much has your injury affected you emotionally? (ie. do they make you angry, scared, upset or depressed?):"
        minText="Not at all affected emotionally"
        maxText="Very affected emotionally"
        onChange={(value) => setEmotionalValue(value)}
      />
      <Separator />
      <Text
        styles="font-medium"
        value="Please list in rank-order the three most important factors that you believe caused your illness:"
      />
      <div className="mt-6 w-2/3 self-center space-y-3">
        <div className="flex flex-row items-center justify-center w-full">
          <Text value="1." styles="mr-4" />
          <TextInput
            styles="flex-1 border border-gray-300 rounded-md p-2"
            onChange={(value) => setFactor1(value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Text value="2." styles="mr-4" />
          <TextInput
            styles="flex-1 border border-gray-300 rounded-md p-2"
            onChange={(value) => setFactor2(value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Text value="3." styles="mr-4" />
          <TextInput
            styles="flex-1 border border-gray-300 rounded-md p-2"
            onChange={(value) => setFactor3(value)}
          />
        </div>
      </div>
      {/* <div>
        <img src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMzUgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzI1NjNlYiIgZD0iTTE1LjI1OCAyNi44NjVhNC4wNDMgNC4wNDMgMCAwMS0xLjEzMyAyLjkxN0E0LjAwNiA0LjAwNiAwIDAxMTEuMjUzIDMxYTMuOTkyIDMuOTkyIDAgMDEtMi44NzItMS4yMTggNC4wMjggNC4wMjggMCAwMS0xLjEzMy0yLjkxN2MuMDA5LS42OTguMi0xLjM4Mi41NTctMS45ODEuMzU2LS42Ljg2My0xLjA5NCAxLjQ3LTEuNDMzLS4wMjQuMTA5LjA5LS4wNTUgMCAwbDEuODYtMS42NTJhOC40OTUgOC40OTUgMCAwMDIuMzA0LTUuNzkzYzAtMi45MjYtMS43MTEtNS45MDEtNC4xNy03LjQ1Ny4wOTQuMDU1LS4wMzYtLjA5NCAwIDBBMy45NTIgMy45NTIgMCAwMTcuOCA3LjExNmEzLjk3NSAzLjk3NSAwIDAxLS41NTctMS45OCA0LjA0MiA0LjA0MiAwIDAxMS4xMzMtMi45MThBNC4wMDYgNC4wMDYgMCAwMTExLjI0NyAxYTMuOTkgMy45OSAwIDAxMi44NzIgMS4yMTggNC4wMjUgNC4wMjUgMCAwMTEuMTMzIDIuOTE3IDguNTIxIDguNTIxIDAgMDAyLjM0NyA1LjgzMmwuODE3LjhjLjMyNi4yODUuNjY4LjU1MSAxLjAyNC43OTguNjIxLjMzIDEuMTQyLjgyNiAxLjUwNCAxLjQzMWEzLjkwMiAzLjkwMiAwIDAxLTEuNTA0IDUuNDQyYy4wMzMtLjA2Ny0uMDYzLjAzNiAwIDBhOC45NjggOC45NjggMCAwMC0zLjAyNCAzLjE4MyA5LjAxNiA5LjAxNiAwIDAwLTEuMTU4IDQuMjQ0ek0xOS43NDEgNS4xMjNjMCAuNzk2LjIzNSAxLjU3NS42NzYgMi4yMzdhNC4wMSA0LjAxIDAgMDAxLjc5OCAxLjQ4MiAzLjk5IDMuOTkgMCAwMDQuMzY2LS44NzMgNC4wNDIgNC4wNDIgMCAwMC44NjktNC4zODYgNC4wMiA0LjAyIDAgMDAtMS40NzYtMS44MDYgMy45OTQgMy45OTQgMCAwMC01LjA1OC41MDEgNC4wMzggNC4wMzggMCAwMC0xLjE3NSAyLjg0NXpNMjMuNzQ4IDIyLjg0Yy0uNzkyIDAtMS41NjcuMjM2LTIuMjI2LjY3OGE0LjAyMSA0LjAyMSAwIDAwLTEuNDc2IDEuODA2IDQuMDQyIDQuMDQyIDAgMDAuODY5IDQuMzg3IDMuOTkgMy45OSAwIDAwNC4zNjYuODczQTQuMDEgNC4wMSAwIDAwMjcuMDggMjkuMWE0LjAzOSA0LjAzOSAwIDAwLS41LTUuMDgyIDQgNCAwIDAwLTIuODMyLTEuMTh6TTM0IDE1Ljk5NGMwLS43OTYtLjIzNS0xLjU3NC0uNjc1LTIuMjM2YTQuMDEgNC4wMSAwIDAwLTEuNzk4LTEuNDgzIDMuOTkgMy45OSAwIDAwLTQuMzY3Ljg3MyA0LjA0MiA0LjA0MiAwIDAwLS44NjkgNC4zODcgNC4wMiA0LjAyIDAgMDAxLjQ3NiAxLjgwNiAzLjk5MyAzLjk5MyAwIDAwMi4yMjYuNjc4IDQuMDAzIDQuMDAzIDAgMDAyLjgzMi0xLjE4QTQuMDQgNC4wNCAwIDAwMzQgMTUuOTkzeiBNNS4wMDcgMTEuOTY5Yy0uNzkzIDAtMS41NjcuMjM2LTIuMjI2LjY3OGE0LjAyMSA0LjAyMSAwIDAwLTEuNDc2IDEuODA3IDQuMDQyIDQuMDQyIDAgMDAuODY5IDQuMzg2IDQuMDAxIDQuMDAxIDAgMDA0LjM2Ni44NzMgNC4wMTEgNC4wMTEgMCAwMDEuNzk4LTEuNDgzIDQuMDM4IDQuMDM4IDAgMDAtLjUtNS4wOCA0LjAwNCA0LjAwNCAwIDAwLTIuODMxLTEuMTgxeiIvPgo8L3N2Zz4K' />
        <PDFDownloadLink
          document={<BriefIllnessPerceptionsSurveyDocument />}
          fileName='brief-illness-perceptions-survey.pdf'
        >
          {({ blob, url, loading, error }) => 'Download'}
        </PDFDownloadLink>
      </div> */}
      {/* <a
        onClick={() => {
          setLoading(true);
          setLoading(false);
        }}
        href={instance.url || ''}
        download='brief-illness-perceptions-survey.pdf'
        className='mt-10 self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-24'
      >
        {instance.url || loading ? 'Download' : <Loading />}
      </a> */}
      <Download
        download="brief-illness-perceptions-survey.pdf"
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
