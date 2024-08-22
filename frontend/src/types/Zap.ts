export type Zap = {
  title: string;
  actions: ActionType[];
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
  name: string;
  interval: string;
  description: string;
};

export type Trigger = {
  name: string;
  interval: string;
  description: string;
};
