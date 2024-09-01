export type Zap = {
  id: string;
  title: string;
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
  id: String;
  action: string;
  interval: string;
  description: string;
  eventId: string;
  eventName: string;
};

export type Trigger = {
  id: String;
  trigger: string;
  interval: string;
  description: string;
  eventId: string;
  eventName: string;
};
