import { CheckBoxes } from 'components/check-boxes';
import { Dropdown } from 'components/dropdown';
import { RadioButtons } from 'components/radio-buttons';
import { SearchBar } from 'components/search-bar';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentNS } from 'types';
import { enumToStringArray } from 'utils';

export const Tools = memo(() => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [subtopicFilters, setSubtopicFilters] = useState<string[]>([]);
  const navigate = useNavigate();
  return (
    <div className="md:px-24">
      <SearchBar
        onClick={(route) => {
          navigate(`/tools/${route}`);
        }}
        filters={categoryFilters?.concat(subtopicFilters)}
      />
      <div className="flex flex-col md:flex-row md:space-x-4 py-4">
        <div className="md:w-56">
          <Dropdown
            label="Category"
            placeholder="Pain, musculoskeletal..."
            values={enumToStringArray(AssessmentNS.Category)}
            onPress={(values) => setCategoryFilters(values)}
          />
        </div>
        <div className="md:w-56">
          <Dropdown
            label="Subtopic"
            placeholder="Quantification..."
            values={enumToStringArray(AssessmentNS.SubTopic)}
            onPress={(values) => setSubtopicFilters(values)}
          />
        </div>
      </div>
      <RadioButtons inputs={['A', 'B', 'C', 'D']} />
      <CheckBoxes inputs={['A', 'B', 'C', 'D']} />
    </div>
  );
});

export default Tools;
