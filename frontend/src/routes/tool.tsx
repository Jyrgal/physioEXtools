import { ToolScaffold } from 'components/tool-scaffold';
import { useAssessment } from 'contexts/assessment';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

export const Tool = memo(() => {
  const params = useParams();
  const { assessmentsMap } = useAssessment();
  const parsedName = params.toolId
    ?.split('-')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ');

  return (
    <div className="md:px-24">
      {/* <Switch />
      <Range />
      <Tabs /> */}
      <ToolScaffold
        assessment={assessmentsMap.get(parsedName?.toLowerCase() || '')}
      />
    </div>
  );
});

export default Tool;
