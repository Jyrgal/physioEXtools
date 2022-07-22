export enum Type {
  UNKNOWN = "Unknown",
  QUESTIONNAIRE = "Questionnaire",
  PHYSICAL_ASSESSMENT = "Physical Assessment",
}

export enum Orientation {
  UNKNOWN = "Unknown",
  PATIENT_FACING = "Patient Facing",
  CLINICIAN_FACING = "Clinician Facing",
}

export enum Category {
  UNKNOWN = "Unknown",
  PAIN = "Pain",
  MUSCULOSKELETAL = "Musculoskeletal",
}

export enum SubTopic {
  UNKNOWN = "Unknown",
  DISABILITY = "Disability",
  INSTABILITY = "Instability",
  OA = "OA",
  BALANCE = "Balance",
  FALLS = "Falls",
  PERIPHERAL_NEUROPATHIC = "Peripheral Neuropathic",
  CENTRAL_NOCIPLASTIC = "Central Nociplastic",
  COGNITIVE = "Cognitive",
  EMOTIONAL = "Emotional",
  SOCIOECONOMIC = "Socioeconomic",
  SENSORIMOTOR_DYSINTEGRATION = "Sensorimotor Dysintegration",
  NOCICEPTIVE_PHYSIOLOGICAL = "Nociceptive/physiological",
}

export enum Topic {
  UNKNOWN = "Unknown",
  QUALIFY_CHARACTERISTICS = "Quantify Characteristics",
  QUANTIFY_PAIN = "Quantify Pain",
  RISK_ASSESSMENT = "Risk Assessment",
  NEURO = "Neuro",
}

export enum Area {
  UNKNOWN = "Unknown",
  NECK = "Neck",
  HEAD = "Head",
  SHOULDER = "Shoulder",
  ARM = "Arm",
  ELBOW = "Elbow",
  WRIST = "Wrist",
  HAND = "Hand",
  BACK = "Back",
  HIP = "Hip",
}

export enum Tag {
  UNKNOWN = "Unknown",
  TAG = "Tag",
}

export interface IAssessment {
  title?: string | null;
  description?: string[] | null;
  orientation?: Orientation | null;
  type?: Type | null;
  categories?: Category[] | null;
  areas?: Area[] | null;
  topics?: Topic[] | null;
  subTopics?: SubTopic[] | null;
  tags?: Tag[] | null;
  icon?: JSX.Element | null;
}

export class Assessment implements IAssessment {
  public title?: string | null;

  public description?: string[] | null | undefined;

  public orientation?: Orientation | null;

  public type?: Type | null;

  public categories?: Category[] | null;

  public areas?: Area[] | null;

  public topics?: Topic[] | null;

  public subTopics?: SubTopic[] | null;

  public tags?: Tag[] | null;

  public icon?: JSX.Element | null;
}
