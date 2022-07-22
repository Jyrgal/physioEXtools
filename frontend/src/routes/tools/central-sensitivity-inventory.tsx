import { Text } from 'components/text';
import { memo, useEffect, useState } from 'react';
import { usePDF } from '@react-pdf/renderer';
import { Download } from 'components/download';
import { Tabs } from 'components/tabs';
import { CentralSensitivityInventoryDocument } from 'components/documents/central-sensitivity-inventory';

export const CentralSensitivityInventory = memo(() => {
  const [morningValue, setMorningValue] = useState('Never');
  const [musclesValue, setMusclesValue] = useState('Never');
  const [anxietyValue, setAnxietyValue] = useState('Never');
  const [grindValue, setGrindValue] = useState('Never');
  const [diarrhoeaValue, setDiarrhoeaValue] = useState('Never');
  const [dailyValue, setDailyValue] = useState('Never');
  const [lightValue, setLightValue] = useState('Never');
  const [activeValue, setActiveValue] = useState('Never');
  const [painValue, setPainValue] = useState('Never');
  const [headacheValue, setHeadacheValue] = useState('Never');
  const [discomfortValue, setDiscomfortValue] = useState('Never');
  const [sleepValue, setSleepValue] = useState('Never');
  const [concentrateValue, setConcentrateValue] = useState('Never');
  const [skinValue, setSkinValue] = useState('Never');
  const [stressValue, setStressValue] = useState('Never');
  const [sadValue, setSadValue] = useState('Never');
  const [energyValue, setEnergyValue] = useState('Never');
  const [tensionValue, setTensionValue] = useState('Never');
  const [jawValue, setJawValue] = useState('Never');
  const [smellValue, setSmellValue] = useState('Never');
  const [urinateValue, setUrinateValue] = useState('Never');
  const [legsValue, setLegsValue] = useState('Never');
  const [rememberValue, setRememberValue] = useState('Never');
  const [traumaValue, setTraumaValue] = useState('Never');
  const [pelvicValue, setPelvicValue] = useState('Never');
  const [loading, setLoading] = useState(false);

  const [instance, updateInstance] = usePDF({
    document: (
      <CentralSensitivityInventoryDocument
        morningValue={morningValue}
        musclesValue={musclesValue}
        anxietyValue={anxietyValue}
        grindValue={grindValue}
        diarrhoeaValue={diarrhoeaValue}
        dailyValue={dailyValue}
        lightValue={lightValue}
        activeValue={activeValue}
        painValue={painValue}
        headacheValue={headacheValue}
        discomfortValue={discomfortValue}
        sleepValue={sleepValue}
        concentrateValue={concentrateValue}
        skinValue={skinValue}
        stressValue={stressValue}
        sadValue={sadValue}
        energyValue={energyValue}
        tensionValue={tensionValue}
        jawValue={jawValue}
        smellValue={smellValue}
        urinateValue={urinateValue}
        legsValue={legsValue}
        rememberValue={rememberValue}
        traumaValue={traumaValue}
        pelvicValue={pelvicValue}
      />
    ),
  });
  useEffect(() => {
    updateInstance();
  }, [
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
    updateInstance,
  ]);

  const tabValues = ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'];

  return (
    <div className="flex flex-col">
      <Text value="When answering these questions, think only of the pain you are experiencing in relation to the problem for which you are having treament." />
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="1. I feel unrefreshed when I wake up in the morning" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setMorningValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="2. My muscles feel stiff and achy" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setMusclesValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="3. I have anxiety attacks" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setAnxietyValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="4. I grind or clench my teeth" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setGrindValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="5. I have problems with diarrhoea and/or constipation" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setDiarrhoeaValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="6. I need help in performing my daily activities" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setDailyValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="7. I am sensitive to bright lights" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setLightValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="8. I get tired very easily when I am physically active" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setActiveValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="9. I feel pain all over my body" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setPainValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="10. I have headaches" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setHeadacheValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="11. I feel discomfort in my bladder and/or burning when I urinate" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setDiscomfortValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="12. I do not sleep well" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setSleepValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="13. I have difficulty concentrating" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setConcentrateValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="14. I have skin problems such as dryness, itchiness or rashes" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setSkinValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="15. Stress makes my physical symptoms get worse" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setStressValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="16. I feel sad or depressed" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setSadValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="17. I have low energy" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setEnergyValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="18. I have muscle tension in my neck and shoulders" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setTensionValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="19. I have pain in my jaw" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setJawValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="20. Certain smells, such as perfumes, make me feel dizzy and nauseated" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setSmellValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="21. I have to urinate frequently" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setUrinateValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="22. My legs feel uncomfortable and restless when I am trying to go to sleep at night" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setLegsValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="23. I have difficulty remembering things" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setRememberValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="24. I suffered trauma as a child" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setTraumaValue(value)}
        />
      </div>
      <div className="mt-5 flex flex-col h-40 lg:flex-row lg:h-20 justify-between items-center border-2 border-gray-200 rounded-lg p-8">
        <Text value="25. I have pain in my pelvic area" />
        <Tabs
          styles="mt-2"
          values={tabValues}
          onClick={(value) => setPelvicValue(value)}
        />
      </div>
      <Download
        download="central-sensitivity-inventory.pdf"
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
