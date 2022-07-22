export interface IAssessment {
  title?: string | null;
  description?: string[] | null;
  orientation?: AssessmentNS.Orientation | null;
  type?: AssessmentNS.Type | null;
  categories?: AssessmentNS.Category[] | null;
  areas?: AssessmentNS.Area[] | null;
  topics?: AssessmentNS.Topic[] | null;
  subTopics?: AssessmentNS.SubTopic[] | null;
  tags?: AssessmentNS.Tag[] | null;
  icon?: JSX.Element | null;
}

export namespace AssessmentNS {
  export enum Type {
    UNKNOWN = 'Unknown',
    QUESTIONNAIRE = 'Questionnaire',
    PHYSICAL_ASSESSMENT = 'Physical Assessment',
  }

  export enum Orientation {
    UNKNOWN = 'Unknown',
    PATIENT_FACING = 'Patient Facing',
    CLINICIAN_FACING = 'Clinician Facing',
  }

  export enum Category {
    UNKNOWN = 'Unknown',
    PAIN = 'Pain',
    MUSCULOSKELETAL = 'Musculoskeletal',
  }

  export enum SubTopic {
    UNKNOWN = 'Unknown',
    DISABILITY = 'Disability',
    INSTABILITY = 'Instability',
    OA = 'OA',
    BALANCE = 'Balance',
    FALLS = 'Falls',
    PERIPHERAL_NEUROPATHIC = 'Peripheral Neuropathic',
    CENTRAL_NOCIPLASTIC = 'Central Nociplastic',
    COGNITIVE = 'Cognitive',
    EMOTIONAL = 'Emotional',
    SOCIOECONOMIC = 'Socioeconomic',
    SENSORIMOTOR_DYSINTEGRATION = 'Sensorimotor Dysintegration',
    NOCICEPTIVE_PHYSIOLOGICAL = 'Nociceptive/physiological',
  }

  export enum Topic {
    UNKNOWN = 'Unknown',
    QUALIFY_CHARACTERISTICS = 'Quantify Characteristics',
    QUANTIFY_PAIN = 'Quantify Pain',
    RISK_ASSESSMENT = 'Risk Assessment',
    NEURO = 'Neuro',
  }

  export enum Area {
    UNKNOWN = 'Unknown',
    NECK = 'Neck',
    HEAD = 'Head',
    SHOULDER = 'Shoulder',
    ARM = 'Arm',
    ELBOW = 'Elbow',
    WRIST = 'Wrist',
    HAND = 'Hand',
    BACK = 'Back',
    HIP = 'Hip',
  }

  export enum Tag {
    UNKNOWN = 'Unknown',
    TAG = 'Tag',
  }
}

export class Assessment implements IAssessment {
  public title?: string | null;

  public description?: string[] | null | undefined;

  public orientation?: AssessmentNS.Orientation | null;

  public type?: AssessmentNS.Type | null;

  public categories?: AssessmentNS.Category[] | null;

  public areas?: AssessmentNS.Area[] | null;

  public topics?: AssessmentNS.Topic[] | null;

  public subTopics?: AssessmentNS.SubTopic[] | null;

  public tags?: AssessmentNS.Tag[] | null;

  public icon?: JSX.Element | null;
}

export interface IQuestion {
  type: QuestionNS.Type;
  title?: string | null;
  minimum?: number | null;
  maximum?: number | null;
  minimumText?: string | null;
  maximumText?: string | null;
  number?: number | null;
  values?: string[] | null;
}

export namespace QuestionNS {
  export enum Type {
    UNKNOWN = 'unknown',
    TEXT = 'text',
    RANGE = 'range',
    TEXT_INPUT = 'text-input',
    TEXT_INPUT_MULTIPLE = 'text-input-multiple',
    TABS = 'tabs',
    SINGLE_SELECT = 'single-select',
    MULTI_SELECT = 'multi-select',
  }
}

export class Question implements IQuestion {
  public type: QuestionNS.Type = QuestionNS.Type.UNKNOWN;

  public title?: string | null;

  public minimum?: number | null;

  public maximum?: number | null;

  public minimumText?: string | null;

  public maximumText?: string | null;

  public number?: number | null;

  public values?: string[] | null | undefined;
}

export const logoBase64 = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMzUgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzI1NjNlYiIgZD0iTTE1LjI1OCAyNi44NjVhNC4wNDMgNC4wNDMgMCAwMS0xLjEzMyAyLjkxN0E0LjAwNiA0LjAwNiAwIDAxMTEuMjUzIDMxYTMuOTkyIDMuOTkyIDAgMDEtMi44NzItMS4yMTggNC4wMjggNC4wMjggMCAwMS0xLjEzMy0yLjkxN2MuMDA5LS42OTguMi0xLjM4Mi41NTctMS45ODEuMzU2LS42Ljg2My0xLjA5NCAxLjQ3LTEuNDMzLS4wMjQuMTA5LjA5LS4wNTUgMCAwbDEuODYtMS42NTJhOC40OTUgOC40OTUgMCAwMDIuMzA0LTUuNzkzYzAtMi45MjYtMS43MTEtNS45MDEtNC4xNy03LjQ1Ny4wOTQuMDU1LS4wMzYtLjA5NCAwIDBBMy45NTIgMy45NTIgMCAwMTcuOCA3LjExNmEzLjk3NSAzLjk3NSAwIDAxLS41NTctMS45OCA0LjA0MiA0LjA0MiAwIDAxMS4xMzMtMi45MThBNC4wMDYgNC4wMDYgMCAwMTExLjI0NyAxYTMuOTkgMy45OSAwIDAxMi44NzIgMS4yMTggNC4wMjUgNC4wMjUgMCAwMTEuMTMzIDIuOTE3IDguNTIxIDguNTIxIDAgMDAyLjM0NyA1LjgzMmwuODE3LjhjLjMyNi4yODUuNjY4LjU1MSAxLjAyNC43OTguNjIxLjMzIDEuMTQyLjgyNiAxLjUwNCAxLjQzMWEzLjkwMiAzLjkwMiAwIDAxLTEuNTA0IDUuNDQyYy4wMzMtLjA2Ny0uMDYzLjAzNiAwIDBhOC45NjggOC45NjggMCAwMC0zLjAyNCAzLjE4MyA5LjAxNiA5LjAxNiAwIDAwLTEuMTU4IDQuMjQ0ek0xOS43NDEgNS4xMjNjMCAuNzk2LjIzNSAxLjU3NS42NzYgMi4yMzdhNC4wMSA0LjAxIDAgMDAxLjc5OCAxLjQ4MiAzLjk5IDMuOTkgMCAwMDQuMzY2LS44NzMgNC4wNDIgNC4wNDIgMCAwMC44NjktNC4zODYgNC4wMiA0LjAyIDAgMDAtMS40NzYtMS44MDYgMy45OTQgMy45OTQgMCAwMC01LjA1OC41MDEgNC4wMzggNC4wMzggMCAwMC0xLjE3NSAyLjg0NXpNMjMuNzQ4IDIyLjg0Yy0uNzkyIDAtMS41NjcuMjM2LTIuMjI2LjY3OGE0LjAyMSA0LjAyMSAwIDAwLTEuNDc2IDEuODA2IDQuMDQyIDQuMDQyIDAgMDAuODY5IDQuMzg3IDMuOTkgMy45OSAwIDAwNC4zNjYuODczQTQuMDEgNC4wMSAwIDAwMjcuMDggMjkuMWE0LjAzOSA0LjAzOSAwIDAwLS41LTUuMDgyIDQgNCAwIDAwLTIuODMyLTEuMTh6TTM0IDE1Ljk5NGMwLS43OTYtLjIzNS0xLjU3NC0uNjc1LTIuMjM2YTQuMDEgNC4wMSAwIDAwLTEuNzk4LTEuNDgzIDMuOTkgMy45OSAwIDAwLTQuMzY3Ljg3MyA0LjA0MiA0LjA0MiAwIDAwLS44NjkgNC4zODcgNC4wMiA0LjAyIDAgMDAxLjQ3NiAxLjgwNiAzLjk5MyAzLjk5MyAwIDAwMi4yMjYuNjc4IDQuMDAzIDQuMDAzIDAgMDAyLjgzMi0xLjE4QTQuMDQgNC4wNCAwIDAwMzQgMTUuOTkzeiBNNS4wMDcgMTEuOTY5Yy0uNzkzIDAtMS41NjcuMjM2LTIuMjI2LjY3OGE0LjAyMSA0LjAyMSAwIDAwLTEuNDc2IDEuODA3IDQuMDQyIDQuMDQyIDAgMDAuODY5IDQuMzg2IDQuMDAxIDQuMDAxIDAgMDA0LjM2Ni44NzMgNC4wMTEgNC4wMTEgMCAwMDEuNzk4LTEuNDgzIDQuMDM4IDQuMDM4IDAgMDAtLjUtNS4wOCA0LjAwNCA0LjAwNCAwIDAwLTIuODMxLTEuMTgxeiIvPgo8L3N2Zz4K';
