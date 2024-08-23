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
  action: string;
  interval: string;
  description: string;
  event: string;
};

export type Trigger = {
  trigger: string;
  interval: string;
  description: string;
  event: string;
};
