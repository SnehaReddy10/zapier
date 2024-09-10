export type Zap = {
  id: string;
  title: string;
  trigger: Trigger;
  actions: any[];
  lastEdit: Date;
  running: boolean;
};

export const enum ActionType {
  NOTION,
  GMAIL,
}

export enum ZapCellType {
  trigger,
  action,
}

export type Action = {
  id: string;
  action: string;
  interval: string;
  description: string;
  eventId: string;
  eventName: string;
};

export type Trigger = {
  id: string;
  trigger: string;
  interval: string;
  description: string;
  eventId: string;
  eventName: string;
  image: string;
};
