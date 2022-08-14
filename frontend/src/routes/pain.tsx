import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category, SubTopic, Topic, IAssessment } from "types/assessment";
import { Text } from "components/text";
import { Button } from "components/button";
import { useAssessment } from "contexts/assessment";
import { Separator } from "components/separator";
import { Select } from "components/select";
import { Tabs } from "components/tabs";

export const Pain = memo(() => {
  const [selectedAssessments, setSelectedAssessments] = useState<IAssessment[]>(
    []
  );
  const [topicAssessments, setTopicAssessments] = useState<IAssessment[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic>(
    Object.values(Topic)[1]
  );
  const { assessments } = useAssessment();
  const filteredAssessments = assessments.filter((assessment) =>
    assessment.categories?.includes(Category.PAIN)
  );
  const tabValues = Object.keys(Topic)
    .slice(1, 3)
    .map(
      (topic, index) => `${index + 1}. ${Topic[topic as keyof typeof Topic]}`
    );
  tabValues.push("Show Selected");
  const navigate = useNavigate();
  useEffect(() => {
    setTopicAssessments(
      filteredAssessments.filter((assessment) =>
        assessment.topics?.includes(selectedTopic)
      )
    );
  }, [selectedTopic]);

  return (
    <div className="md:px-24 w-full flex flex-col">
      {/* {filteredAssessments.map((assessment) => assessment.title).join('\n')} */}
      {/* <Text
        value={assessments
          .filter((assessment) =>
            assessment.categories?.includes(Category.PAIN),
          )
          .map((assessment, index) => assessment.title)
          .join('\n')}
      /> */}
      <Tabs
        styles="mt-2 w-full"
        values={tabValues || [""]}
        onClick={(value) => {
          setSelectedTopic(value.slice(value.indexOf(" ") + 1) as Topic);
        }}
      />
      <Text styles="flex text-2xl font-semibold mt-4" value={selectedTopic} />
      {topicAssessments
        .filter((assessment) => assessment.subTopics?.length === 0)
        .map((assessment) => (
          <Select
            key={assessment.id}
            styles="flex text-md font-normal mt-2"
            value={assessment.title || ""}
            startSelected={selectedAssessments.includes(assessment)}
            onClick={() => {
              setSelectedAssessments((prevState) => {
                if (assessment.title) {
                  const index = prevState.indexOf(assessment);
                  if (index > -1) {
                    const newState = [...prevState];
                    newState.splice(index, 1);
                    return newState;
                  }
                  return [...prevState, assessment];
                }
                return [...prevState];
              });
            }}
          />
        ))}
      {Object.keys(SubTopic)
        .slice(1)
        .map((subTopic) => {
          const subTopicAssessments = topicAssessments.filter(
            (assessment) =>
              assessment &&
              assessment.subTopics &&
              assessment.subTopics[0] ===
                SubTopic[subTopic as keyof typeof SubTopic]
          );
          if (subTopicAssessments?.length !== 0) {
            return (
              <div key={subTopic}>
                <Text
                  styles="flex text-lg font-semibold mt-2"
                  value={SubTopic[subTopic as keyof typeof SubTopic]}
                />
                {subTopicAssessments.map((assessment) => (
                  <Select
                    key={assessment.id}
                    styles="flex text-md font-normal mt-2"
                    value={assessment.title || ""}
                    startSelected={selectedAssessments.includes(assessment)}
                    onClick={() => {
                      setSelectedAssessments((prevState) => {
                        if (assessment.title) {
                          const index = prevState.indexOf(assessment);
                          if (index > -1) {
                            const newState = [...prevState];
                            newState.splice(index, 1);
                            return newState;
                          }
                          return [...prevState, assessment];
                        }
                        return [...prevState];
                      });
                    }}
                  />
                ))}
              </div>
            );
          }
          return <div> </div>;
        })}
      {selectedTopic === ("Selected" as Topic) &&
        selectedAssessments.map((assessment) => (
          <Select
            key={assessment.id}
            styles="flex text-md font-normal mt-2"
            value={assessment.title || ""}
            startSelected={selectedAssessments.includes(assessment)}
            onClick={() => {
              setSelectedAssessments((prevState) => {
                if (assessment.title) {
                  const index = prevState.indexOf(assessment);
                  if (index > -1) {
                    const newState = [...prevState];
                    newState.splice(index, 1);
                    return newState;
                  }
                  return [...prevState, assessment];
                }
                return [...prevState];
              });
            }}
          />
        ))}
      <Separator />
      <Button
        value="Submit"
        styles="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-24"
        onClick={() => {
          const assessmentsURL = selectedAssessments
            .map((assessment) => assessment.id)
            .join("&");
          navigate(`/tools/${assessmentsURL}`);
        }}
      />
    </div>
  );
});

export default Pain;
