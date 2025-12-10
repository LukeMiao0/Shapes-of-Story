export interface StoryShape {
  id: number;
  name: string;
  engName: string;
  example: string;
  path: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  icon: string;
  hook: string;
  conflict: string;
  resolution: string;
}

export interface RandomTopic {
  title: string;
  hook: string;
  hint: string;
}

export enum Section {
  INTRO = 'intro',
  MODEL = 'model',
  PRACTICE = 'practice',
}