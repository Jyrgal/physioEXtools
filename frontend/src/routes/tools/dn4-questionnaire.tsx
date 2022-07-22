import { Text } from 'components/text';
import { memo, useEffect, useState } from 'react';
import { usePDF } from '@react-pdf/renderer';
import { Download } from 'components/download';
import { Tabs } from 'components/tabs';
import { DN4QuestionnaireDocument } from 'components/documents/dn4-questionnaire';

export const DN4Questionnaire = memo(() => {
  const [burningValue, setBurningValue] = useState(false);
  const [coldValue, setColdValue] = useState(false);
  const [shocksValue, setShocksValue] = useState(false);
  const [tinglingValue, setTinglingValue] = useState(false);
  const [pinsValue, setPinsValue] = useState(false);
  const [numbValue, setNumbValue] = useState(false);
  const [itchingValue, setItchingValue] = useState(false);
  const [touchValue, setTouchValue] = useState(false);
  const [prickValue, setPrickValue] = useState(false);
  const [brushValue, setBrushValue] = useState(false);
  const [loading, setLoading] = useState(false);

  const [instance, updateInstance] = usePDF({
    document: (
      <DN4QuestionnaireDocument
        burning={burningValue}
        cold={coldValue}
        shocks={shocksValue}
        tingling={tinglingValue}
        pins={pinsValue}
        numb={numbValue}
        itching={itchingValue}
        touch={touchValue}
        prick={prickValue}
        brush={brushValue}
      />
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [
    burningValue,
    coldValue,
    shocksValue,
    tinglingValue,
    pinsValue,
    numbValue,
    itchingValue,
    touchValue,
    prickValue,
    brushValue,
    updateInstance,
  ]);

  const onClick = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    switch (value) {
      case 'No':
        setValue(false);
        break;
      case 'Yes':
        setValue(true);
        break;
      default:
    }
  };

  const tabValues = ['No', 'Yes'];

  return (
    <div className="flex flex-col">
      <Text value="When answering these questions, think only of the pain you are experiencing in relation to the problem for which you are having treament." />
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="1. Burning?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setBurningValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="2. Painful cold?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setColdValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="3. Electric shocks?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setShocksValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="4. Tingling?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setTinglingValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="5. Pins and needles?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setPinsValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="6. Numbness?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setNumbValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="7. Itching?" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setItchingValue)}
        />
      </div>
      <Text value="EXAMINATION OF THE PATIENT" styles="mt-10" />
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="8. Hypoesthesia to touch" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setTouchValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="9. Hypoesthesia to prick" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setPrickValue)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 md:flex-row md:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="10. Brushing" />
        <Tabs
          values={tabValues}
          onClick={(value) => onClick(value, setBrushValue)}
        />
      </div>
      <Download
        download="dn4-questionnaire.pdf"
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
