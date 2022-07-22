import {
  memo,
  createContext,
  useMemo,
  useContext,
  ReactNode,
  useCallback,
  useState,
  useEffect,
} from "react";
import assessmentsList from "constants/assessments.json";
import questionsList from "constants/questions.json";
import { Question } from "types/question";
import { Assessment, IAssessment } from "types/assessment";

interface Store {
  assessments: IAssessment[];
  assessmentsMap: Map<string, Assessment>;
  questionsMap: Map<string, Question[]>;
  getAssessments: () => IAssessment[];
  getQuestions: () => void;
}

const handleProviderNotSet = () => {
  throw new Error("Assessment provider not set");
};

const AssessmentContext = createContext<Store>({
  assessments: [],
  assessmentsMap: new Map<string, Assessment>(),
  questionsMap: new Map<string, Question[]>(),
  getAssessments: handleProviderNotSet,
  getQuestions: handleProviderNotSet,
});

export const AssessmentProvider = memo(
  ({ children }: { children: ReactNode }) => {
    const [assessments, setAssessments] = useState<Assessment[]>([]);
    const [assessmentsMap, setAssessmentsMap] = useState(
      new Map<string, Assessment>()
    );
    const [questionsMap, setQuestionsMap] = useState(
      new Map<string, Question[]>()
    );

    const getAssessments = useCallback(() => {
      const converted: Assessment[] = assessmentsList.assessments.map(
        (assessment) => {
          // const convertedAssessment = {
          //   title: assessment.title,
          //   description: assessment.description,
          //   orientation:
          //     AssessmentNS.Orientation[
          //       stringToEnum(
          //         AssessmentNS.Orientation,
          //         assessment.orientation,
          //       ) as keyof typeof AssessmentNS.Orientation
          //     ],
          //   type: AssessmentNS.Type[
          //     stringToEnum(
          //       AssessmentNS.Type,
          //       assessment.type,
          //     ) as keyof typeof AssessmentNS.Type
          //   ],
          //   categories: assessment.categories.map(
          //     (category) =>
          //       AssessmentNS.Category[
          //         stringToEnum(
          //           AssessmentNS.Category,
          //           category,
          //         ) as keyof typeof AssessmentNS.Category
          //       ],
          //   ),
          //   areas: assessment.areas.map(
          //     (area) =>
          //       AssessmentNS.Area[
          //         stringToEnum(
          //           AssessmentNS.Area,
          //           area,
          //         ) as keyof typeof AssessmentNS.Area
          //       ],
          //   ),
          //   topics: assessment.topics.map(
          //     (topic) =>
          //       AssessmentNS.Topic[
          //         stringToEnum(
          //           AssessmentNS.Topic,
          //           topic,
          //         ) as keyof typeof AssessmentNS.Topic
          //       ],
          //   ),
          //   subTopics: assessment.subTopics.map(
          //     (subTopic) =>
          //       AssessmentNS.SubTopic[
          //         stringToEnum(
          //           AssessmentNS.SubTopic,
          //           subTopic,
          //         ) as keyof typeof AssessmentNS.SubTopic
          //       ],
          //   ),
          //   tags: assessment.tags.map(
          //     (tag) =>
          //       AssessmentNS.Tag[
          //         stringToEnum(
          //           AssessmentNS.Tag,
          //           tag,
          //         ) as keyof typeof AssessmentNS.Tag
          //       ],
          //   ),
          //   icon: getIcon(assessment.icon),
          // };
          const convertedAssessment = new Assessment();
          Object.assign(convertedAssessment, assessment);
          setAssessmentsMap((assessmentsMap) =>
            assessmentsMap.set(
              assessment.title.toLowerCase(),
              convertedAssessment
            )
          );
          return convertedAssessment;
        }
      );
      setAssessments(converted);
      return converted;
    }, [setAssessments]);

    const getQuestions = useCallback(() => {
      const assessmentTitles = Object.keys(questionsList.questions);
      const assessmentQuestions = Object.values(questionsList.questions);
      assessmentTitles.forEach((title, index) => {
        const questions: Question[] = assessmentQuestions[index].map(
          (question) => {
            const jsonParsedQuestion = new Question();
            Object.assign(jsonParsedQuestion, question);
            return jsonParsedQuestion;
          }
        );
        setQuestionsMap((questionsMap) => questionsMap.set(title, questions));
      });
    }, []);

    useEffect(() => {
      getAssessments();
      getQuestions();
    }, [getAssessments, getQuestions]);

    const data: Store = useMemo(
      () => ({
        assessments,
        assessmentsMap,
        questionsMap,
        getAssessments,
        getQuestions,
      }),
      [assessments, assessmentsMap, questionsMap, getAssessments, getQuestions]
    );

    return (
      <AssessmentContext.Provider value={data}>
        {children}
      </AssessmentContext.Provider>
    );
  }
);

export const useAssessment = () => useContext(AssessmentContext);
